import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comopnents/home/home.component';
import { HeaderComponent } from './comopnents/header/header.component';
import { FooterComponent } from './comopnents/footer/footer.component';
import { MyProjectsComponent } from './comopnents/my-projects/my-projects.component';
import { AboutComponent } from './comopnents/about/about.component';
import { ExperienceComponent } from './comopnents/experience/experience.component';
import { ContactComponent } from './comopnents/contact/contact.component';
import { ProfileComponent } from './comopnents/profile/profile.component';
import { NotFoundComponent } from './comopnents/not-found/not-found.component';
import { LifeCycleHooksComponent } from './comopnents/life-cycle-hooks/life-cycle-hooks.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'hooks',
    component: LifeCycleHooksComponent
  },
  { path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const components = [
  HeaderComponent,
  FooterComponent,
  HomeComponent,
  NotFoundComponent,
  MyProjectsComponent,
  AboutComponent,
  ExperienceComponent,
  ContactComponent,
  ProfileComponent,
  NotFoundComponent,
  LifeCycleHooksComponent
]
