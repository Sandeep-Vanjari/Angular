import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DisasterListComponent } from './disaster-list/disaster-list.component';
import { SavioursListComponent } from './saviours-list/saviours-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'crisis-center', component: DisasterListComponent },
  { path: 'heroes',        component: SavioursListComponent },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}