import { Component, Input } from '@angular/core';
import { Collaborator } from 'src/app/shared/models/document.model';

@Component({
  selector: 'app-collaborator-cursors',
  templateUrl: './collaborator-cursors.component.html',
  styleUrls: ['./collaborator-cursors.component.scss']
})
export class CollaboratorCursorsComponent {
  @Input() collaborators: Collaborator[] | null = [];
}
