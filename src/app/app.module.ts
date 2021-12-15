import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { HeaderComponent } from './components/header/header.component';
import { SelectedComponent } from './components/selected/selected.component';
import { MoneyComponent } from './components/money/money.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    HeaderComponent,
    SelectedComponent,
    MoneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
