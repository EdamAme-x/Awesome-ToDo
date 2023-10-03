import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: {
    title: string;
    check: boolean;
  }[] = [
    {
      title: "Make this",
      check: true
    }
  ];
  

  constructor() {}
}
