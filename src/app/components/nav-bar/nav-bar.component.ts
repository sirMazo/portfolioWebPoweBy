import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navbarVisible: boolean = true;
  contentFlex: string;
  menuPosition: { top: string, right: string } = { top: '5px', right: '5px' };


  constructor(private renderer: Renderer2) {
    // Establecer porcentaje por defecto
    this.contentFlex = '0 0 80%';
  }


  toggleNavbar() {
    const sidebarElement = document.querySelector('.sidebar');
    const contentElement = document.querySelector('.main_content');
    if (sidebarElement && contentElement) {
      const sidebarHidden = sidebarElement.classList.contains('hidden');
      if (sidebarHidden) {
        this.renderer.removeClass(sidebarElement, 'hidden');
        this.renderer.removeClass(contentElement, 'move-left');
        this.contentFlex = '0 0 80%';
      } else {
        this.renderer.addClass(sidebarElement, 'hidden');
        this.renderer.addClass(contentElement, 'move-left');
        this.contentFlex = '0 0 100%';
      }
    }
  }

  ngOnInit() {
  }
}
