import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { HeaderComponent } from './header/header.component';
import { SecondMainComponentComponent } from './second-main-component/second-main-component.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    HeaderComponent,
    SecondMainComponentComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
