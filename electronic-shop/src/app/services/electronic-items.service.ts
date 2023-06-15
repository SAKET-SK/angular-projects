import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElectronicItemsService {
  url = 'http://localhost:3000/items';
  constructor(private http: HttpClient) {}
  getAllItems(){
    return this.http.get(this.url);
  }

  saveItemData(data:any){
    console.log(data);
    return this.http.post(this.url, data)
  }

  deleteItem( id:any ){
    return this.http.delete(`${this.url}/${id}`)
  }

  getItemById(id:any){
    return this.http.get(`${this.url}/${id}`)
  }

  updateItemData(id:any, data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
}
