import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home.component";
import { SetupComponent } from "./setup/setup.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ProjectDetailComponent } from "./projects/project-detail/project-detail.component";
import { ScenariosComponent } from "./scenarios/scenarios.component";
import { ScenarioDetailComponent } from "./scenarios/scenario-detail/scenario-detail.component";
import { SchemasComponent } from "./schemas/schemas.component";
import { SchemaDetailComponent } from "./schemas/schema-detail/schema-detail.component";
import { DatasetsComponent } from "./datasets/datasets.component";
import { DatasetDetailComponent } from "./datasets/dataset-detail/dataset-detail.component";
import { DatabasesComponent } from "./databases/databases.component";
import { DatabaseDetailComponent } from "./databases/database-detail/database-detail.component";
import { GeneratorsComponent } from "./generators/generators.component";
import { GeneratorDetailComponent } from "./generators/generator-detail/generator-detail.component";
import { ApisComponent } from "./apis/apis.component";
import { ApiDetailComponent } from "./apis/api-detail/api-detail.component";
import { PreferencesComponent } from "./preferences/preferences.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'setup', component: SetupComponent, pathMatch: 'full'},
  { path: 'projects', component: ProjectsComponent, pathMatch: 'full'},
  { path: 'projects/:projectId', component: ProjectDetailComponent},
  { path: 'scenarios', component: ScenariosComponent, pathMatch: 'full'},
  { path: 'scenarios/:scenarioId', component: ScenarioDetailComponent},
  { path: 'schemas', component: SchemasComponent, pathMatch: 'full'},
  { path: 'schemas/:schemaId', component: SchemaDetailComponent},
  { path: 'datasets', component: DatasetsComponent, pathMatch: 'full'},
  { path: 'datasets/:datasetId', component: DatasetDetailComponent},
  { path: 'databases', component: DatabasesComponent, pathMatch: 'full'},
  { path: 'databases/:databaseId', component: DatabaseDetailComponent},
  { path: 'generators', component: GeneratorsComponent, pathMatch: 'full'},
  { path: 'generators/:generatorId', component: GeneratorDetailComponent},
  { path: 'apis', component: ApisComponent, pathMatch: 'full'},
  { path: 'apis/:apiId', component: ApiDetailComponent},
  { path: 'preferences', component: PreferencesComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
