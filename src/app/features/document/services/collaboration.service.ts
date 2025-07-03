import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { AppState } from 'src/app/store';
import { updateCollaborators } from '../store/document.actions';

@Injectable({
  providedIn: 'root'
})
export class CollaborationService {
  private collaborators = [
    { id: 'user-2', name: 'Bob', color: '#ffb3ba', cursorPosition: { top: 0, left: 0 } },
    { id: 'user-3', name: 'Charlie', color: '#baffc9', cursorPosition: { top: 0, left: 0 } },
    { id: 'user-4', name: 'Diana', color: '#bae1ff', cursorPosition: { top: 0, left: 0 } }
  ];

  constructor(private store: Store<AppState>) { }

  startSimulation(): void {
    interval(10000).subscribe(() => { 
      const updatedCollaborators = this.collaborators.map(c => ({
        ...c,
        cursorPosition: {
          top: Math.floor(Math.random() * 300),
          left: Math.floor(Math.random() * 500)
        }
      }));
      this.store.dispatch(updateCollaborators({ collaborators: updatedCollaborators }));
    });
  }
}