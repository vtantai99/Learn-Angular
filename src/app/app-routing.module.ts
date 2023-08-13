import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemCreateComponent } from './item-create/item-create.component';

export const ROUTES_NAME = {
  ITEMS: 'items',
  CREATE: 'create'
}

const routes: Routes = [
  { path: ROUTES_NAME.ITEMS, component: ItemListComponent },
  { path: ROUTES_NAME.CREATE, component: ItemCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
