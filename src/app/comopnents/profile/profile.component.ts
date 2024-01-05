import { DbStoreService } from 'src/app/services/db-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: { [key: string]: any; } | undefined;
  constructor(private dbStore: DbStoreService) {}

  ngOnInit(): void {
     this.user = this.dbStore.user;
     console.log(this.user)
  }

  onClick(url:string) {
    window.open(url, "_blank")
  }
}
