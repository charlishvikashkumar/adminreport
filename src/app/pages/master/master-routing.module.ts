import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomEditComponent } from 'ng2-smart-table/lib/components/cell/cell-edit-mode/custom-edit.component';

import { ReportComponent } from './report/report.component';
import { ReportlistComponent } from './reportlist/reportlist.component';

const routes: Routes = [
  {
    path: 'reportlist',
    component: ReportlistComponent
  },
  {
    path: 'reportadd',
    component: ReportComponent
  },
  {
    path: 'reportedit/:id',
    component: ReportComponent
  },
  {
    path: 'reportview/:id',
    component: ReportComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
