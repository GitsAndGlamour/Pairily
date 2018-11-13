import { NgModule } from '@angular/core';
import { LayoutRoutes } from './layout.routing';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MaterialModule } from "../themes/material/material.module";
import { MdcModule } from "../themes/mdc/mdc.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
    FormsModule,
    MaterialModule,
    MdcModule
  ],
  declarations: [
    DashboardComponent
  ]
})

export class LayoutModule {}
