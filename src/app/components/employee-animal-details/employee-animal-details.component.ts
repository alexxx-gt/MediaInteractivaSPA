import { Component, Input } from '@angular/core';
import { AnimalModel } from 'src/app/models/animal.model';
import { EmployeeModel } from 'src/app/models/employee.model';
import { FormBuilder } from '@angular/forms';
import petTypes from 'src/app/infrastructure/app.constants';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
    selector: 'employee-animal-details',
    templateUrl: './employee-animal-details.component.html',
    styleUrls: ['employee-animal-details.component.css']
})
export class EmployeeAnimalDetailsComponent {
    @Input() employee: EmployeeModel;
    @Input() animals: AnimalModel[];

    private petForm;
    private petTypes;

    constructor(private formBuilder: FormBuilder,
        private animalService: AnimalService) {
        this.petForm = this.formBuilder.group({
            name: '',
            type: '',
        });
        this.petTypes = petTypes;
    }

    convertPetType(type: number) {
        switch (type) {
            case 1: {
                return 'Dog';
            }
            case 2: {
                return 'Cat';
            }
            case 3: {
                return 'Parrot';
            }
            case 4: {
                return 'Hamster';
            }
            case 5: {
                return 'Cavy';
            }
            case 6: {
                return 'Snake';
            }
            case 7: {
                return 'Raccoon';
            }
        }
    }

    get isEmployee() {
        if (this.employee.isMIEmployee === true) {
            return 'Yes';
        } else {
            return 'No';
        }
    }

    onSubmit(petData){
        let pet = new AnimalModel(petData.type, petData.name, this.employee.id);
        debugger
        this.animalService.put(pet).subscribe((response: AnimalModel) => {
            this.animals.push(response);
        });
    }
}
