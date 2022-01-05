import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

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
      delay(2000), //adicionado delay para teste do feedback ao usuário de lista carregando
      tap((cursos) => console.log(cursos))
    );
  }
}
