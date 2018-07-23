import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatComponentsModule } from './md-components.module';
import { DirectoryComponent } from './directory/directory.component';
import { FlexLayoutModule } from '@angular/flex-layout' ;
import { MatIconModule } from '../../node_modules/@angular/material/icon';
import { MarketComponent } from './market/market.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { GridDirective } from './grid.directive';



@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    MarketComponent,
    NavbarComponent,
    DirectoryComponent,
    GridDirective,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    FlexLayoutModule,
    MatIconModule ,
   MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
