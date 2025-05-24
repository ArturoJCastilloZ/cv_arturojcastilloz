import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@Components/header/header.component';
import { FooterComponent } from '@Components/footer/footer.component';
import { WelcomeComponent } from '@Pages/welcome/welcome.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, WelcomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'newsitev2';
}
