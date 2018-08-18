import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { SocialComponent } from './social/social.component';
import { ToursComponent } from './tours/tours.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactErrorComponent } from './contact-error/contact-error.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    SocialComponent,
    ToursComponent,
    AboutUsComponent,
    ContactErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
