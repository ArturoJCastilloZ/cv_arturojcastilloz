import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@Components/footer/footer.component';
import { HeaderComponent } from '@Components/header/header.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        HeaderComponent,
        RouterOutlet,
        FooterComponent
    ]
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
