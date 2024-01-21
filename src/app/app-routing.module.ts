import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_pages/home/home.component';
import { FeedsComponent } from './_pages/feeds/feeds-main/feeds.component';
import { RootComponent } from './_pages/root/root.component';
import { EdclubComponent } from './_pages/education/edclub/edclub.component';
import { FeedsDetailComponent } from './_pages/feeds/feeds-detail/feeds-detail.component';
import { EdclubDetailComponent } from './_pages/education/edclub-detail/edclub-detail.component';

const routes: Routes = [
  { path: "", component: RootComponent }, 
  {
    path: "home", component: HomeComponent,
    children: [
      { path: "feeds", component: FeedsComponent },
      { path: "feeds/:id", component: FeedsDetailComponent },
      { path: "edclub", component: EdclubComponent },
      { path: "edclub/:id", component: EdclubDetailComponent },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
