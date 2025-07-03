import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/shared/models/comment.model';

@Component({
  selector: 'app-comment-sidebar',
  templateUrl: './comment-sidebar.component.html',
  styleUrls: ['./comment-sidebar.component.scss']
})
export class CommentSidebarComponent {
  @Input() comments: Comment[] | null = [];
}