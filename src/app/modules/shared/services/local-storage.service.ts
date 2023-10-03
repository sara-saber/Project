import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  
  public set(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data))
  }
  public get(key: string): any {
    const data = localStorage.getItem(key)
    if (data !== null) {
      return JSON.parse(data)
    }
  }
  public remove(key: string) {
    localStorage.removeItem(key)

  }
  public clear() {
    return localStorage.clear()
  }
}
