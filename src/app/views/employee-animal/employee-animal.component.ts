import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeModel } from 'src/app/models/employee.model';
import { AnimalModel } from 'src/app/models/animal.model';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
    selector: 'app-employee-animal',
    templateUrl: './employee-animal.component.html',
    styleUrls: ['employee-animal.component.css']
})
export class EmployeeAnimalComponent implements OnInit {
    private employees: EmployeeModel[];
    private employee: EmployeeModel;
    private animals: AnimalModel[];
    constructor(private employeeService: EmployeeService,
                private animalService: AnimalService) {

    }

    ngOnInit() {
        this.employeeService.getList().subscribe((result: EmployeeModel[]) => {
            this.employees = result;
            this.getEmployeeAndPets(this.employees[0].id);
        });
    }

    employeeClicked(employeeId: number) {
        this.getEmployeeAndPets(employeeId);
        console.log(employeeId);
    }

    getEmployeeAndPets(employeeId: number) {
        this.employeeService.get(employeeId).subscribe((result: EmployeeModel) => {
            this.employee = result;
        });
        this.animalService.getList(employeeId).subscribe((result: AnimalModel[]) => {
            this.animals = result;
        });
    }
}