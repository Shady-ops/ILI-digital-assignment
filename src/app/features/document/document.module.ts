// src/app/features/document/document.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { DocumentPageComponent } from './components/document-page.component';
import { DocumentEditorComponent } from './components/document-editor/document-editor/document-editor.component';
import { CollaboratorCursorsComponent } from './components/collaborator-cursors/collaborator-cursors.component';
import { DocumentRoutingModule } from './document-routing/document-routing.module';
import { CommentSidebarComponent } from './components/comment-sidebar/comment-sidebar.component';
import { StoreModule } from '@ngrx/store';
import { documentReducer } from './store/document.reducer';
import { EffectsModule } from '@ngrx/effects';

// NgRx Imports will be added here later

@NgModule({
  declarations: [
    DocumentPageComponent,
    DocumentEditorComponent,
    CollaboratorCursorsComponent,
    CommentSidebarComponent,
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    SharedModule,
    StoreModule.forFeature('document', documentReducer)
  ],
})
export class DocumentModule {}
