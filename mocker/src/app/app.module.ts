import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SetupComponent } from './setup/setup.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { ScenarioDetailComponent } from './scenarios/scenario-detail/scenario-detail.component';
import { SchemasComponent } from './schemas/schemas.component';
import { SchemaDetailComponent } from './schemas/schema-detail/schema-detail.component';
import { DatasetsComponent } from './datasets/datasets.component';
import { DatasetDetailComponent } from './datasets/dataset-detail/dataset-detail.component';
import { DatabasesComponent } from './databases/databases.component';
import { DatabaseDetailComponent } from './databases/database-detail/database-detail.component';
import { GeneratorsComponent } from './generators/generators.component';
import { GeneratorDetailComponent } from './generators/generator-detail/generator-detail.component';
import { ApisComponent } from './apis/apis.component';
import { ApiDetailComponent } from './apis/api-detail/api-detail.component';
import { PreferencesComponent } from './preferences/preferences.component';
import {MdcModule} from "./themes/mdc/mdc.module";
import {MaterialModule} from "./themes/material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdcModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
