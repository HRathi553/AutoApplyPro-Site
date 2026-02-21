import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LinkedIn Job Automator';
  version = 'v1.0.0';
  
  // Replace these with your actual GitHub Release links later
  win64Link = 'https://github.com/HRathi553/LinkedIn-Job-Automator/releases/latest/download/LinkedIn-Job-Automator-Setup-x64.exe';
  win32Link = 'https://github.com/HRathi553/LinkedIn-Job-Automator/releases/latest/download/LinkedIn-Job-Automator-Setup-ia32.exe';
  macLink = 'https://github.com/HRathi553/LinkedIn-Job-Automator/releases/latest/download/LinkedIn-Job-Automator-Setup.dmg';
  linuxLink = 'https://github.com/HRathi553/LinkedIn-Job-Automator/releases/latest/download/LinkedIn-Job-Automator-Setup.AppImage';
}
