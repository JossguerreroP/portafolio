import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent implements OnInit{

 activeSection: string = 'inicio';

 showSection(section: string) {
    this.activeSection = section;
    console.log(this.activeSection)
  }

ngOnInit(): void {
    
      
  }
}
