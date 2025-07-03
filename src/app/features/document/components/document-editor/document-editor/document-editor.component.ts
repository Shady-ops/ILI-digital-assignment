import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserRole } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-document-editor',
  templateUrl: './document-editor.component.html',
  // styleUrls: ['./document-editor.component.scss']
  styles: [`.editor-container { border: 1px solid #ccc; min-height: 400px; padding: 1rem; }`]
})
export class DocumentEditorComponent {
  @Input() content: string | null = '';
  @Input() role: UserRole | null = 'Viewer';
  @Output() contentChange = new EventEmitter<string>();
  @Output() commentRequested = new EventEmitter<string>()

  get isEditable(): boolean {
    return this.role === 'Editor';
  }

   get canComment(): boolean {
    return this.role === 'Editor' || this.role === 'Reviewer';
  }

  onContentChange(event: Event): void {
    const value = (event.target as HTMLDivElement).innerHTML;
    this.contentChange.emit(value);
  }

  onSelectionChange(): void {
    if (!this.canComment) return;

    const selection = window.getSelection();
    const selectedText = selection?.toString().trim();

    if (selectedText) {
      const commentText = prompt(`Add a comment for "${selectedText}":`);
      if (commentText) {
        this.commentRequested.emit(commentText);
      }
      selection?.removeAllRanges();
    }
  }
}
