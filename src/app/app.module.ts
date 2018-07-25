import { FormControl } from '@angular/forms';

import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MatComponentsModule } from './md-components.module';
import { FooterComponent } from './footer/footer.component';
import { MarketComponent } from './market/market.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridDirective } from './grid.directive';
import { ProfiledirectoryComponent } from './profiledirectory/profiledirectory.component';
import { MerchantstoreComponent } from './profiledirectory/merchantstore/merchantstore.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MarketComponent,
    NavbarComponent,
    HomeComponent,
    DirectoryComponent,
    GridDirective,
    ProfiledirectoryComponent,
    MerchantstoreComponent,

  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatComponentsModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'market', component: MarketComponent },
      { path: 'directory', component: DirectoryComponent },
      { path: 'merchant/profile', component: ProfiledirectoryComponent }
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
