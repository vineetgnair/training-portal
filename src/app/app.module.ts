import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTrainingsComponent } from './view-trainings/view-trainings.component';

import { HttpClientModule } from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreateTrainingsComponent } from './create-trainings/create-trainings.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { HighlightSearchPipe } from './highlight-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ViewTrainingsComponent,
    CreateTrainingsComponent,
    SearchFilterPipe,
    HighlightSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
