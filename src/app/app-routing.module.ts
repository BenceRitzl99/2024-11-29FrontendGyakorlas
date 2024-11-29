import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecordComponent } from './record/record.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "record", component: RecordComponent },
  { path: "", redirectTo: "data", pathMatch: "full" },
  { path: "**", redirectTo: "home" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
