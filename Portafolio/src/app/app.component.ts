import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  activeSection: string = 'inicio';

  showSection(section: string) {
    this.activeSection = section;
    console.log(this.activeSection)
  }



  title = 'Portafolio';
}
