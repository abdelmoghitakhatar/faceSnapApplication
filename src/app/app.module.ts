import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapByIdComponent } from './face-snap-by-id/face-snap-by-id.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { appRoutingModule } from './routes/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    HeaderComponent,
    FaceSnapByIdComponent,
    LandingPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    {provide: LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default);
  }
}
