import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatableComponent } from './shared/datatable.component';
import { DataListComponent } from './data-list/data-list.component';
import { DataListDirective } from './data-list.directive';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    DataListComponent,
    DataListDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
