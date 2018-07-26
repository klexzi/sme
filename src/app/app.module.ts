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
import { AdvertiseComponent } from './help/advertise/advertise.component';
import { BrandsComponent } from './market/brands/brands.component';
import { ElectronicsComponent } from './market/electronics/electronics.component';
import { AboutComponent } from './help/about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { ManageUsersComponent, BlockDialogComponent } from './admin/manage-users/manage-users.component';
import { ManageMerchantsComponent, DeactivateDialogComponent } from './admin/manage-merchants/manage-merchants.component';


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
    AdvertiseComponent,
    BrandsComponent,
    ElectronicsComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    ManageUsersComponent,
    ManageMerchantsComponent,
    BlockDialogComponent,
    DeactivateDialogComponent,
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
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignupComponent },
      { path: 'help/contact-us', component: ContactComponent },
      { path: 'help/advertise', component: AdvertiseComponent },
      { path: 'help/about-us', component: AboutComponent },
      { path: 'admin', component: AdminComponent },
     ])
  ],
  entryComponents: [
    BlockDialogComponent,
    DeactivateDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
