import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//import { RegisterComponent } from './features/auth/register/register.component';
import { BreedsModule } from './features/breeds/breeds.module';
import { AuthModule } from './features/auth/auth.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    //RegisterComponent,
    BreedsModule,
    AuthModule,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgModule,
    FormsModule,
    ReactiveFormsModule,
    BreedsModule,
    AppComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

