import { Component, OnInit } from '@angular/core';
import { DbStoreService } from 'src/app/services/db-store.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  constructor(private db: DbStoreService) {}
  public skills: any | undefined;

  ngOnInit(): void {
      this.skills = this.db.skill;
  }
}
