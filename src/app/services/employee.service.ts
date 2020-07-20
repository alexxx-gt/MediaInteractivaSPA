import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService{
    constructor(private http: HttpClient) {

    }

    public getList() {
        return this.http.get('api/employee');
    }

    public get(id: number) {
        return this.http.get(`api/employee/${id}`);
    }

    public put(dto: EmployeeModel) {
        return this.http.put('api/employee', dto);
    }

    public patch(id: number, dto: EmployeeModel) {
        return this.http.patch(`api/employee/${id}`, dto);
    }

    public delete(id: number) {
        return this.http.delete(`api/employee/${id}`);
    }
}