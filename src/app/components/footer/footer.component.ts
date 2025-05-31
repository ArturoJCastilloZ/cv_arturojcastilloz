import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CommonService } from '@Services/common.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: true,
    imports: [
        CommonModule
    ]
})
export class FooterComponent implements OnInit {

    public readonly _COMMON = inject(CommonService);

    actuallyYear = new Date().getFullYear();

    constructor() { }

    ngOnInit() {
    }

    downloadCV() {
        const link = document.createElement('a');
        link.href = '/assets/resume.pdf';
        link.download = 'CV_Arturo_Castillo.pdf';
        link.click();
    }

}
