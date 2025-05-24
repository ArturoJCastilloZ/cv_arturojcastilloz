import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true,
    imports: [
        CommonModule,
    ]
})
export class HeaderComponent implements OnInit {

    hiddenMenu = signal<boolean>(true);

    constructor() { }

    ngOnInit() {
        this.hiddenMenu.set(false);
    }

    handleChangeMenu() {
        this.hiddenMenu.set(!this.hiddenMenu());
    }

}
