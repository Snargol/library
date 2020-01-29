import {getSuperClassDeclarations} from '@angular/core/schematics/migrations/static-queries/angular/super_class';

export class Book {
  photo: string;
  synopsis: string;
  constructor(public title: string, public author: string) {
  }
}
