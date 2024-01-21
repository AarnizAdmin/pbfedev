import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './_pages/home/home.component';
import { FeedsComponent } from './_pages/feeds/feeds-main/feeds.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootComponent } from './_pages/root/root.component';
import { EdclubComponent } from './_pages/education/edclub/edclub.component';
import {MatButtonModule} from '@angular/material/button';
import { EdclubDetailComponent } from './_pages/education/edclub-detail/edclub-detail.component';
import { FeedsDetailComponent } from './_pages/feeds/feeds-detail/feeds-detail.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import { UserProfileComponent } from './_pages/users/user-profile/user-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedsComponent,
    RootComponent,
    EdclubComponent,
    EdclubDetailComponent,
    FeedsDetailComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
