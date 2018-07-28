
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

import { ContactMerchantComponent } from './directory/merchantstore/contact-merchant/contact-merchant.component';
import { StoreComponent } from './directory/merchant/store/store.component';
import { ProductComponent } from './directory/merchant/product/product.component';
import { MerchantboardComponent } from './merchantboard/merchantboard.component';
import { MsidenavComponent } from './merchantboard/msidenav/msidenav.component';


import { AdvertiseComponent } from './help/advertise/advertise.component';
import { BrandsComponent } from './market/brands/brands.component';
import { ElectronicsComponent } from './market/electronics/electronics.component';
import { HotprodcutComponent } from './market/hotprodcut/hotprodcut.component';
import { AboutComponent } from './help/about/about.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MerchantprofileComponent } from './merchantboard/merchantprofile/merchantprofile.component';
import { EditmerchantComponent } from './merchantboard/editmerchant/editmerchant.component';



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

    ContactMerchantComponent,
    StoreComponent,
    ProductComponent,
    MerchantboardComponent,
    MsidenavComponent,


    AdvertiseComponent,
    BrandsComponent,
    ElectronicsComponent,
    HotprodcutComponent,
    AboutComponent,
    UserComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    MerchantprofileComponent,
    EditmerchantComponent

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

      { path: 'merchant', component: MerchantComponent },
      { path: 'merchantboard', component: MerchantboardComponent },
      { path: 'merchant/store/:id', component: ProductComponent },
      { path: 'merchant/store', component: StoreComponent },
      { path: 'help/contact-us', component: ContactComponent }

      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'help/contact-us', component: ContactComponent },
      { path: 'help/advertise', component: AdvertiseComponent },
      { path: 'help/about-us', component: AboutComponent }

     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
