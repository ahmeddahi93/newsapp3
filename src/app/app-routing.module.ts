import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EgyptnewsComponent } from './egyptnews/egyptnews.component';
import { UsnewsComponent } from './usnews/usnews.component';


const routes: Routes = [
  {path:"egypt",component:EgyptnewsComponent},
  {path:"us",component:UsnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
