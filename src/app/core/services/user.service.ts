import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type UserRole = 'Editor' | 'Reviewer' | 'Viewer';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  roles: UserRole[] = ['Editor', 'Reviewer', 'Viewer'];

  private currentUserRole = new BehaviorSubject<UserRole>('Editor');

  currentUserRole$ = this.currentUserRole.asObservable();

  constructor() {}
  setRole(role: UserRole): void {
    this.currentUserRole.next(role);
    console.log(`User role changed to: ${role}`);
  }
}
