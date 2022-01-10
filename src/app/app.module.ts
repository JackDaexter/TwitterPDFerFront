import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { SignInModule } from './sign-in/sign-in.module';
import { NavigationService } from './services/navigation.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignInModule,
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
