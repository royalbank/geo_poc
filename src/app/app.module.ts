import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroListComponent } from './components/hero/hero-list.component';
import { GeolocationComponent } from './components/geolocation/geolocation.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    GeolocationComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDHedrgF7LKlyUVa0HvqsbB-IWmpz3owi4',
      libraries: ["places"]
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
