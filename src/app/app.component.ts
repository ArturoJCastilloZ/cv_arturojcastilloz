import { Component } from '@angular/core';
import { LoaderComponent } from '@Components/loader/loader.component';
import { HomeComponent } from '@Pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
