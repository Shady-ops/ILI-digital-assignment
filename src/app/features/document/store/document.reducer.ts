import { createReducer, on } from '@ngrx/store';
import * as DocumentActions from './document.actions';
import { DocumentState } from 'src/app/shared/models/document.model';

export const initialState: DocumentState = {
  content: '',
  collaborators: [
    { id: 'user-2', name: 'Bob', color: '#ffb3ba', cursorPosition: { top: 50, left: 150 } },
    { id: 'user-3', name: 'Charlie', color: '#baffc9', cursorPosition: { top: 100, left: 250 } },
    { id: 'user-4', name: 'Diana', color: '#bae1ff', cursorPosition: { top: 150, left: 100 } }
  ],
  comments: [],
};

export const documentReducer = createReducer(
  initialState,
  on(DocumentActions.updateDocumentContent, (state, { content }) => ({
    ...state,
    content
  })),
  on(DocumentActions.updateCollaborators, (state, { collaborators }) => ({
    ...state,
    collaborators
  })),
  on(DocumentActions.addComment, (state, { comment }) => {

    const updatedComments = [...state.comments, comment];

    const updatedContent = state.content.replace(
      comment.resolvesText,
      `<mark class="comment-highlight" data-comment-id="${comment.id}">${comment.resolvesText}</mark>`
    );

    return {
      ...state,
      comments: updatedComments,
      content: updatedContent
    };
  })
);