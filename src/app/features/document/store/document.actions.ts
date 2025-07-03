import { createAction, props } from '@ngrx/store';
import { Comment } from 'src/app/shared/models/comment.model';
import { Collaborator } from 'src/app/shared/models/document.model';

export const updateDocumentContent = createAction(
  '[Document Editor] Update Content',
  props<{ content: string }>()
);

export const updateCollaborators = createAction(
  '[Collaboration Service] Update Collaborators',
  props<{ collaborators: Collaborator[] }>()
);

export const addComment = createAction(
  '[Comments] Add Comment',
  props<{ comment: Comment }>()
);