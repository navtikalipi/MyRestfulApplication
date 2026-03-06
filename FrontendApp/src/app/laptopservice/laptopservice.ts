import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Laptopservice {
  private baseurl = 'http://localhost:8080/laptop'

  constructor(private http: HttpClient) {}

  getLaptops(): Observable<any> {
    return this.http.get(`${this.baseurl}/list`);
  }

  addLaptop(laptop: any): Observable<any> {
    return this.http.post(`${this.baseurl}/add`, laptop);
  }

  updateLaptop(index: number, laptop: any): Observable<any> {
    return this.http.put(`${this.baseurl}/update/${index}`, laptop);
  }

  // Delete a laptop - maps to DELETE /laptop/delete/{index}
  deleteLaptop(index: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/delete/${index}`);
  }

  // Find by index - maps to GET /laptop/findOne/{index}
  findById(index: number): Observable<any> {
    return this.http.get(`${this.baseurl}/findOne/${index}`);
  }

  findByBrand(brand: string): Observable<any> {
    return this.http.get(`${this.baseurl}/findByBrand/${brand}`);
  }

}
