import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { IMenu } from '@Interfaces/global.interface';
import { CommonService } from '@Services/common.service';
import { DispatcherServices } from '@Services/dispatchers.service';
import * as _ from 'underscore';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class HeaderComponent implements OnInit {

    hiddenMenu = signal<boolean>(true);
    menuOptions: IMenu[] = [];

    private readonly _DISPATCH = inject(DispatcherServices);
    private readonly _DESTROYREF = inject(DestroyRef);
    private readonly _COMMON = inject(CommonService);

    constructor() { }

    ngOnInit() {
        this.hiddenMenu.set(false);

        this._COMMON.menuOption$.pipe(
            takeUntilDestroyed(this._DESTROYREF)
        ).subscribe({
            next: (data) => {
                if (data?.length === 0) {
                    this._DISPATCH.GET_HEADERS().pipe(
                        takeUntilDestroyed(this._DESTROYREF)
                    ).subscribe({
                        next: (action) => this.handleGetHeadersSuccess(action.response)
                    })
                } else this.handleGetHeadersSuccess(data)
            }
        })
    }

    handleGetHeadersSuccess(action: any) {
        this.menuOptions = _.sortBy(action, function (f) {
            return f._id;
        });
    }

    handleChangeMenu() {
        this.hiddenMenu.set(!this.hiddenMenu());
    }

}
