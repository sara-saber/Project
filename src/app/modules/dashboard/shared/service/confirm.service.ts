import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  private confirmSubject = new Subject<boolean>()
  
  create(message: string): Subject<boolean> {
    const shouldConfirm = window.confirm(message);
    this.confirmSubject.next(shouldConfirm);
    return this.confirmSubject
  }

}
