import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AutoApply Pro';
  version = 'v1.0.0';
  
  // Pointing to the public landing page repository's release section
  win64Link = 'https://github.com/HRathi553/LinkedInn-Automation-Landing-Page/releases/download/v1.0.0/AutoApply%20Pro%20Setup%201.0.0.exe';
}
