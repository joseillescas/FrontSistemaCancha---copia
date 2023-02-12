import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'reclamo',
    loadChildren: () => import("./reclamos/reclamos-routing.module").then(m => m.ReclamosRoutingModule)
  },
  {
    path: 'edit-reclamos',
    loadChildren: () => import("./reclamos/edit-reclamos/edit-reclamos-routing.module").then(m => m.EditReclamosRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
