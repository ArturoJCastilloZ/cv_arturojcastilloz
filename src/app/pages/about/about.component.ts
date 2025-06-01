import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IAbout } from '@Interfaces/global.interface';
import { CommonService } from '@Services/common.service';
import { DispatcherServices } from '@Services/dispatchers.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: true,
    imports: [
        CommonModule,
    ]
})
export class AboutComponent implements OnInit {
    aboutData$ = new Observable<IAbout[]>();
    aboutData: IAbout[] = [];
    srcImage: string = '';
    profesion: string = '';

    private readonly _DESTROYREF = inject(DestroyRef);
    private readonly _DISPATCH = inject(DispatcherServices);
    private readonly _COMMON = inject(CommonService);

    constructor() {
    }

    ngOnInit() {
        this._COMMON.aboutData$.pipe(
            takeUntilDestroyed(this._DESTROYREF),
        ).subscribe({
            next: (data) => {
                if (data?.length === 0) {
                    this._DISPATCH.GET_ABOUT().pipe(
                        takeUntilDestroyed(this._DESTROYREF)
                    ).subscribe({
                        next: (action) => this.handleGetAboutSuccess(action.response)
                    });
                } else this.handleGetAboutSuccess(data)
            }
        })

    }

    handleGetAboutSuccess(action: any) {
        this.aboutData = action;
        this.srcImage = this.aboutData?.[0]?.Imagen;
        this.profesion = this.aboutData?.[0]?.Profesion;
    }

}
