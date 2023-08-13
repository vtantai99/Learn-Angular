import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';

export const ROUTES_NAME = {
  ITEMS: 'items'
}

const routes: Routes = [
  { path: ROUTES_NAME.ITEMS, component: ItemListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
