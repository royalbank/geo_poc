import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GeolocationComponent } from './components/geolocation/geolocation.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { HttpModule } from '@angular/http';
import { DocumentComponent } from './components/document/document.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdCardModule, MdTabsModule, MdMenuModule, MdToolbarModule} from '@angular/material';
import { MdButtonModule, MdCheckboxModule, MdIconModule } from '@angular/material';

import 'hammerjs';


const appRoutes: Routes = [
  { path: 'demo', component: GeolocationComponent },
  { path: 'document', component: DocumentComponent },
  {
    path: '',
    redirectTo: '/demo',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    GeolocationComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDHedrgF7LKlyUVa0HvqsbB-IWmpz3owi4',
      libraries: ['places']
    }),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MdTabsModule,
    MdMenuModule,
    MdToolbarModule,
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdInputModule,
    MdCardModule
  ],
  exports: [MdTabsModule, MdMenuModule, MdToolbarModule, MdButtonModule, MdCheckboxModule, MdIconModule, MdInputModule, MdCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
