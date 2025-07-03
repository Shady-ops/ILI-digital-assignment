import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DocumentState } from 'src/app/shared/models/document.model';

export const selectDocumentFeature = createFeatureSelector<DocumentState>('document');

export const selectDocumentContent = createSelector(
  selectDocumentFeature,
  (state: DocumentState) => state.content
);

export const selectCollaborators = createSelector(
  selectDocumentFeature,
  (state: DocumentState) => state.collaborators
);

export const selectComments = createSelector(
  selectDocumentFeature,
  (state: DocumentState) => state.comments
);