import {
  Component,
  ElementRef,
  Renderer2,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DbStoreService } from 'src/app/services/db-store.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public name: string = 'Kamal Ruidas';

  @ViewChild(HomeComponent) homeComponent!: HomeComponent;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private db: DbStoreService
  ) {}

  ngOnInit(): void {
    this.db.scrollObservable$.subscribe((section: any) => {
      this.scrollTo(section);
    });
  }

  scrollTo(section: string): void {
    console.log('section', section);

    // this.homeComponent.scrollTo(section);

    const sectionElement = document.getElementById(section);
    // alert("peyechi "+sectionId + "--> "+ JSON.stringify(sectionElement))
    console.log("Peyechi ", section, sectionElement);
    if (sectionElement) {
      this.renderer.setProperty(sectionElement, 'scrollTop', 0); // Ensure scrolling to the top of the section
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }

    // const element = this.el.nativeElement.querySelector(`#${section}`);

    // const offset = element.offsetTop;

    // window.scrollTo(0, offset);

    // console.log("section",section);
    // console.log("element",element);

    // this.renderer.scroll({
    //   top: element.offsetTop,
    //   behavior: 'smooth',
    // });
  }

  toggleMenu() {
    const menu: any = document.querySelector('.menu-links');
    const icon: any = document.querySelector('.hamburger-icon');
    console.log('icon', icon);
    console.log('menu', menu);
    // menu.classList.toggle("open");
    // icon.classList.toggle("open");
  }
}
