import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor(private httpClient: HttpClient) {}

  findAll(): Curso[] {
    return [
      { _id: '1', nome: 'Angular', categoria: 'Front-end' },
      { _id: '2', nome: 'Spring', categoria: 'Back-end' },
    ];
  }
}
