import { Component, OnInit ,ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {}


ngOnInit(): void {
        this.route.fragment.subscribe(f => {
    if(f) this.scrollToSection(f);
  });
  }

 public scrollToSection(section: any) {
  console.log(section)
  
  }


}
