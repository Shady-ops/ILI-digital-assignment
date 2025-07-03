import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfflineService {
  private isOffline = new BehaviorSubject<boolean>(false);
  isOffline$ = this.isOffline.asObservable();

  constructor() { }

  toggleOfflineMode(): void {
    this.isOffline.next(!this.isOffline.getValue());
    console.log(`Offline mode is now: ${this.isOffline.getValue()}`);
  }
}