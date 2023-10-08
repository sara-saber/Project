import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceModel } from '../models/generic-model';
import { map, Observable, tap } from 'rxjs';
import { Resolve} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export abstract class ResourceService<T extends ResourceModel<T>> implements Resolve<T[]>{
  constructor(
    private http: HttpClient,
    private tConstructor: { new(m: Partial<T>, ...args: unknown[]): T },
    protected apiUrl: string
  ) { }
  resolve(): Observable<T[]> {
    return this.getAll()
  }
  public getQuery(attributeName: string, value: any): Observable<T> {
    return this.http
      .get(`${this.apiUrl}`, { params: new HttpParams().set(attributeName, value) })
      .pipe(
        map(result => {
          if (Array.isArray(result) && result.length > 0) {
            return new this.tConstructor(result[0] as T);
          } else {
            throw new Error('No data found in the API response.');
          }
        })
      );
  }

  public getRequest<T>(url: string): Observable<T> {

    return this.http.get<T>(url)
  }

  public add(resource: Partial<T> & { toJson: () => T }): Observable<T> {
    return this.http
      .post<T>(`${this.apiUrl}`, resource.toJson())
      .pipe(map((result) => new this.tConstructor(result)));
  }

  public getAll(): Observable<T[]> {
    return this.http
      .get<T[]>(`${this.apiUrl}`)
      .pipe(map((result) => result.map((i) => new this.tConstructor(i))));
  }

  public getById(id: string): Observable<T> {
    return this.http
      .get<T>(`${this.apiUrl}/${id}`)
      .pipe(map((result) => new this.tConstructor(result)));
  }

  public update(resource: Partial<T> & { toJson: () => T }): Observable<T> {
    return this.http
      .put<T>(`${this.apiUrl}/${resource.id}`, resource.toJson())
      .pipe(map((result) => new this.tConstructor(result)));
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
