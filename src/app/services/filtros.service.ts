import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FiltrosService {
  private patron: string = '';

  constructor() {}

  getPatron() {
    return this.patron;
  }

  setPatron(patron: string) {
    this.patron = patron;
  }

  borrarFiltros() {
    this.patron = '';
  }
}
