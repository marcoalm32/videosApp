import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: any = [];

  constructor() { }

  saveData(index: string, data: any): boolean {
    if(index){
        this.data[index] = data;
        return true;
    }else {
      return false;
    }
  }

  getData(index: string): any {
    if(index){
      return this.data[index]
    }else{
      return null;
    }
  }

  deleteData(index: string): boolean {
    return delete this.data[index];
  }
}
