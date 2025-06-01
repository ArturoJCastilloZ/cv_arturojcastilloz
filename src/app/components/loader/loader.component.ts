import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonService } from '@Services/common.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css'],
    standalone: true,
    imports: [
        CommonModule
    ]
})
export class LoaderComponent implements OnInit {

    isLoading = signal<boolean>(false);

    public readonly _COMMON = inject(CommonService);
    private readonly _DESTROYREF = inject(DestroyRef);

    constructor() {
        this._COMMON.showSpinner$.pipe(
            takeUntilDestroyed(this._DESTROYREF)
        ).subscribe({
            next: (loading: boolean) => this.isLoading.set(loading)
        })
    }

    ngOnInit() {
    }
}
