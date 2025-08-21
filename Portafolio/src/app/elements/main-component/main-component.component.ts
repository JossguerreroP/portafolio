import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent  implements AfterViewInit{
  @ViewChild('inicio') inicio!: ElementRef;
  @ViewChild('habilidades') habilidades!: ElementRef;
  @ViewChild('proyectos') proyectos!: ElementRef;
 



 activeSection: string = 'inicio';



  constructor(private route: ActivatedRoute) {}



  ngAfterViewInit() {
    // Scroll to fragment if exists
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToSection(fragment);
      }
    });
  }

  public scrollToSection(section: string) {
    const sectionMap: { [key: string]: ElementRef } = {
      inicio: this.inicio,
      habilidades: this.habilidades,
      proyectos: this.proyectos
    };
    const el = sectionMap[section];
    if (el) {
      el.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


}
