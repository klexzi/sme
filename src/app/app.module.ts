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
import { ContactComponent } from './help/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FashionComponent } from './market/fashion/fashion.component';
import { ShowcaseComponent } from './market/showcase/showcase.component';
import { MerchantComponent } from './directory/merchant/merchant.component';
import { BrandsComponent } from './market/brands/brands.component';
import { ElectronicsComponent } from './market/electronics/electronics.component';


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
    MerchantComponent,
    ContactComponent,
    FashionComponent,
    ShowcaseComponent,
    BrandsComponent,
    ElectronicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatComponentsModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'market/fashions/:id', component: ShowcaseComponent },
      { path: 'market/brands/:id', component: ShowcaseComponent },
      { path: 'market/electronics/:id', component: ShowcaseComponent },
      { path: 'market/electronics', component: ElectronicsComponent },
      { path: 'market/brands', component: BrandsComponent },
     { path: 'market/fashions', component: FashionComponent  },
      { path: 'market', component: MarketComponent },
      { path: 'directory', component: DirectoryComponent },
      { path: 'help/contact-us', component: ContactComponent }
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
