import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeAnimalComponent } from './views/employee-animal/employee-animal.component';
import { EmployeeAnimalDetailsComponent } from './components/employee-animal-details/employee-animal-details.component';
import { EmployeeAnimalFormComponent } from './components/employee-animal-form/employee-animal-form.component';
import { EmployeeListItemComponent } from './components/employee-list-item/employee-list-item.component';
import { EmployeeService } from './services/employee.service';
import { AnimalService } from './services/animal.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from './infrastructure/api.interceptor';
import { EmployeeAnimalModule } from './views/employee-animal/employee-animal.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeAnimalComponent,
    EmployeeAnimalDetailsComponent,
    EmployeeAnimalFormComponent,
    EmployeeListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // EmployeeAnimalModule
  ],
  providers: [
    AnimalService,
    EmployeeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
