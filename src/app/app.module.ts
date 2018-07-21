import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatComponentsModule } from './md-components.module';
import { DirectoryComponent } from './directory/directory.component';
import { FlexLayoutModule } from '@angular/flex-layout' ;
import { MatIconModule } from '../../node_modules/@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    FlexLayoutModule,
    MatIconModule ,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
