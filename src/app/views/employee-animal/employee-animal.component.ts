import { Component } from "@angular/core";
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeModel } from 'src/app/models/employee.model';

@Component({
    selector: 'employee-animal',
    templateUrl: './employee-animal.component.html',
    styleUrls: ['employee-animal.component.css']
})
export class EmployeeAnimalComponent {
    private employees: EmployeeModel[];
    constructor(private employeeService: EmployeeService) {

    }

    ngOnInit() {
        this.employeeService.getList().subscribe((result) => {
            debugger
        })
    }
}