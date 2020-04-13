// Angular Modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Custom Components
import {AppComponent} from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHomepageComponent } from './page-homepage/page-homepage.component';
import { PageNavigationComponent } from './page-navigation/page-navigation.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageClassesComponent } from './page-classes/page-classes.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageContactComponent } from './page-contact/page-contact.component';

// Module declaration
@NgModule({
  imports: [BrowserModule, NgbModule.forRoot()],
  declarations: [AppComponent, PageHomepageComponent, PageNavigationComponent, PageFooterComponent, PageRegisterComponent, PageLoginComponent, PageClassesComponent, PageAboutComponent, PageContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
