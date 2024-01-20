import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_pages/home/home.component';
import { FeedsComponent } from './_pages/feeds/feeds.component';
import { RootComponent } from './_pages/root/root.component';
import { EdclubComponent } from './_pages/edclub/edclub.component';

const routes: Routes = [
  { path: "", component: RootComponent }, 
  {
    path: "home", component: HomeComponent,
    children: [
      { path: "feeds", component: FeedsComponent },
      { path: "edclub", component: EdclubComponent },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
