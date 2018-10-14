import { NgModule } from '@angular/core';
import { LayoutRoutes } from './layout.routing';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SetupComponent } from "../setup/setup.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ProjectDetailComponent } from "../projects/project-detail/project-detail.component";
import { ScenariosComponent } from "../scenarios/scenarios.component";
import { ScenarioDetailComponent } from "../scenarios/scenario-detail/scenario-detail.component";
import { SchemasComponent } from "../schemas/schemas.component";
import { SchemaDetailComponent } from "../schemas/schema-detail/schema-detail.component";
import { DatasetsComponent } from "../datasets/datasets.component";
import { DatasetDetailComponent } from "../datasets/dataset-detail/dataset-detail.component";
import { DatabasesComponent } from "../databases/databases.component";
import { DatabaseDetailComponent } from "../databases/database-detail/database-detail.component";
import { GeneratorsComponent } from "../generators/generators.component";
import { GeneratorDetailComponent } from "../generators/generator-detail/generator-detail.component";
import { ApisComponent } from "../apis/apis.component";
import { ApiDetailComponent } from "../apis/api-detail/api-detail.component";
import { PreferencesComponent } from "../preferences/preferences.component";
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
    DashboardComponent,
    DashboardComponent,
    SetupComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    ScenariosComponent,
    ScenarioDetailComponent,
    SchemasComponent,
    SchemaDetailComponent,
    DatasetsComponent,
    DatasetDetailComponent,
    DatabasesComponent,
    DatabaseDetailComponent,
    GeneratorsComponent,
    GeneratorDetailComponent,
    ApisComponent,
    ApiDetailComponent,
    PreferencesComponent
  ]
})

export class LayoutModule {}
