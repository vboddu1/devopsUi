import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/insertData',
    pathMatch: 'full'
  },
  { path: 'insertData', component: CreatepageComponent },
  { path: 'retrieveData',  component: RetrivepageComponent }
];

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
