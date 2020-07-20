import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AnimalModel } from '../models/animal.model';

@Injectable()
export class AnimalService {
    constructor(private http: HttpClient) {

    }

    public getList() {
        return this.http.get('api/animal')
    }

    public get(id: number) {
        return this.http.get(`api/animal/${id}`);
    }

    public put(dto: AnimalModel) {
        return this.http.put('api/animal', dto);
    }

    public patch(id: number, dto: AnimalModel) {
        return this.http.patch(`api/animal/${id}`, dto);
    }

    public delete(id: number) {
        return this.http.delete(`api/animal/${id}`);
    }
}