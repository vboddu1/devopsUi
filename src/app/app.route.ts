import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatepageComponent } from './createpage/createpage.component';
import { RetrivepageComponent } from './retrivepage/retrivepage.component';

const routes: Routes = [
    { path: '',
      redirectTo: '/insertData',
      pathMatch: 'full'
    },
    { path: 'insertData', component: CreatepageComponent },
    { path: 'retrieveData',  component: RetrivepageComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }