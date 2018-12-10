import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatComponentsModule } from './mat-components/mat-components.module';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptorService } from './services/auth-interceptor/auth-interceptor.service';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { ManageSplunkAppsComponent } from './components/manage-splunk-apps/manage-splunk-apps.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    HomeComponent,
    LoginComponent,
    EditFormComponent,
    FooterComponent,
    ManageSplunkAppsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  entryComponents: [
    EditFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
