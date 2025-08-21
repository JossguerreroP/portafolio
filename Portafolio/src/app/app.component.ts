import { Component} from '@angular/core';
import { MainComponentComponent} from './elements/main-component/main-component.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

 


  showSection(section: string) {

 
}


  title = 'Portafolio';
}
