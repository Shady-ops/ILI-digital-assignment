import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserService, UserRole } from 'src/app/core/services/user.service';
import { AppState } from 'src/app/store';
import { CollaborationService } from '../services/collaboration.service';
import { addComment, updateDocumentContent } from '../store/document.actions';
import { selectCollaborators, selectComments, selectDocumentContent } from '../store/document.selectors';

@Component({
  selector: 'app-document-page',
  templateUrl: './document-page.component.html',
  styleUrls: ['./document-page.component.scss']
})
export class DocumentPageComponent implements OnInit {
  content$: Observable<string>;
  collaborators$ = this.store.select(selectCollaborators);
  userRole$: Observable<UserRole>;
  comments$ = this.store.select(selectComments);

  constructor(
    private store: Store<AppState>,
    private userService: UserService,
    private collaborationService: CollaborationService
  ) {
    this.content$ = this.store.select(selectDocumentContent);
    this.userRole$ = this.userService.currentUserRole$;
  }

  ngOnInit(): void {
    this.collaborationService.startSimulation();
  }

  onContentChanged(newContent: string): void {

    this.store.dispatch(updateDocumentContent({ content: newContent }));
  }

  onCommentRequested(commentText: string): void {
    const selection = window.getSelection();
    const resolvesText = selection?.toString().trim();
    if (!resolvesText || !commentText) return;

    this.store.dispatch(addComment({
      comment: {
        id: `comment-${Date.now()}`, 
        authorId: 'current-user',
        text: commentText,
        resolvesText: resolvesText
      }
    }));
  }
}