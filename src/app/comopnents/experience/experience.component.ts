import { Component, OnInit } from '@angular/core';
import { DbStoreService } from 'src/app/services/db-store.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private db: DbStoreService) {}
  public experience: any | undefined;

  ngOnInit(): void {
      this.experience = this.db.about;
  }
}
