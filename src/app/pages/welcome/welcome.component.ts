import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IAbout, IHero } from '@Interfaces/global.interface';
import { CommonService } from '@Services/common.service';
import { DispatcherServices } from '@Services/dispatchers.service';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    standalone: true,
    imports: [
        CommonModule,
    ]
})
export class WelcomeComponent implements OnInit {
    userDescription: IHero[] = [];
    career: string = '';

    private readonly _DESTROYREF = inject(DestroyRef);
    private readonly _DISPATCH = inject(DispatcherServices);
    public readonly _COMMON = inject(CommonService);

    constructor() {
        this._COMMON.aboutData$?.pipe(
            takeUntilDestroyed(this._DESTROYREF)
        ).subscribe((data) => {
            if (data?.length > 0) {
                data?.map((data: IAbout) => this.career = data?.Profesion);
            }
        });

    }

    ngOnInit() {
        this._COMMON.heroData$?.pipe(
            takeUntilDestroyed(this._DESTROYREF)
        ).subscribe((data) => {
            if (data?.length === 0) {
                this._DISPATCH.GET_HERO().pipe(
                    takeUntilDestroyed(this._DESTROYREF)
                ).subscribe({
                    next: (action) => this.handleGetHeroSuccess(action.response)
                });
            } else this.handleGetHeroSuccess(data)
        });
    }

    handleGetHeroSuccess(action: any) {
        this.userDescription = action;
    }

    downloadCV() {
        const link = document.createElement('a');
        link.href = '/assets/arturo-castillo-resume.pdf';
        link.download = 'arturo-castillo-resume.pdf';
        link.click();
    }
}
