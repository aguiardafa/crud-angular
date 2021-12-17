import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly API = '/assets/cursos.json';

  constructor(private httpClient: HttpClient) {}

  findAll() {
    return this.httpClient.get<Curso[]>(this.API).pipe(
      first(),
      tap((cursos) => console.log(cursos))
    );
  }
}
