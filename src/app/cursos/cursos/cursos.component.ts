import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Curso } from '../models/curso';
import { CursosService } from './../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  cursos$: Observable<Curso[]>;
  displayedColumns = ['nome', 'categoria'];

  constructor(private cursoService: CursosService) {
    this.cursos$ = this.cursoService.findAll().pipe(
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  ngOnInit(): void {}
}
