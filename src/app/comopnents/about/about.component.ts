import { Component, OnInit } from '@angular/core';
import { DbStoreService } from 'src/app/services/db-store.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  constructor(private db: DbStoreService) {}
  public about: any | undefined;

  ngOnInit(): void {
      this.about = this.db.about;
  }

}
