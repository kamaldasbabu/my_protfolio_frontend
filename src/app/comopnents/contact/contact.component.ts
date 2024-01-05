import { Component, OnInit } from '@angular/core';
import { DbStoreService } from 'src/app/services/db-store.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contact: any | undefined;

  constructor(private db: DbStoreService) {}
  ngOnInit(): void {
      this.contact = this.db.contact;
  }
}
