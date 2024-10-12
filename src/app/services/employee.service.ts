import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Employee {
  id: number;
  name: string;
  role: string;
  reportingTo: string;
  corporateLevel: string;
  lifetime: string;
  vacationDaysLeft: number;
  sickDaysLeft: number;
}

interface VacationRequest {
  employeeName: string;
  submittedOn: string;
  duration: string;
  salary: number;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployeeDetails(): Observable<Employee> {
    const employee = {
      id: 1,
      name: 'Ahmad Azmi',
      role: 'Junior Accounting Officer',
      reportingTo: 'Salwa Assem',
      corporateLevel: 'Level 10',
      lifetime: '2.5 Years',
      vacationDaysLeft: 10,
      sickDaysLeft: 14
    };
    return of(employee);
  }

  getVacationRequests(): Observable<VacationRequest[]> {
    const requests: VacationRequest[] = [
      { employeeName: 'Ahmad Attar', submittedOn: '1/3/2024', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: 1000, status: 'Pending' },
      { employeeName: 'Ahmad Azmi', submittedOn: '2/3/2024', duration: '8 Days (2/3/2023 - 10/3/2023)', salary: 2500, status: 'Approved' }
    ];
    return of(requests);
  }
}
