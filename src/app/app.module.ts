import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';  // Import dashboard
import { VacationRequestCardComponent } from './components/vacation-request-card/vacation-request-card.component';  // Import vacation request
import { PagerComponent } from './components/pager/pager.component';  // Import pager
import { SliderComponent } from './components/slider/slider.component';  // Import slider
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';  // Import employee details

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VacationRequestCardComponent,
    PagerComponent,
    SliderComponent,
    EmployeeDetailsComponent  // Declare all components here
  ],
  imports: [
    BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
