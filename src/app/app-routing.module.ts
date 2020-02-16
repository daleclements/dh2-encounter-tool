import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { TableViewComponent } from './table-view/table-view.component';
import { InfoViewComponent } from './info-view/info-view.component';

const routes: Routes = [
  { path: 'cards', component: CardsViewComponent },
  { path: 'table', component: TableViewComponent },
  { path: 'info', component: InfoViewComponent },
  { path: '', component: CardsViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
