import { DbStoreService } from './../../services/db-store.service';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public user: { [key: string]: string | number | boolean } | undefined;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private db: DbStoreService
  ) {}

  ngOnInit(): void {
    this.user = this.db.user;
    this.db.scrollObservable$.subscribe((section: any) => {
      this.scrollTo(section);
    });
  }

  scrollTo(section: string): void {
    console.log('section', section);

    const element = this.el.nativeElement.querySelector(`#${section}`);

    const offset = element.offsetTop;

    window.scrollTo(0, offset);

    console.log('section', section);
    console.log('element', element);
  }

  toggleMenu() {
    const menu: any = document.querySelector('.menu-links');
    const icon: any = document.querySelector('.hamburger-icon');
    const id: any = document.getElementById('header')
    console.log('icon', icon);
    console.log('menu', menu);
    console.log('id', id);
    // menu.classList.toggle("open");
    // icon.classList.toggle("open");
  }
}
