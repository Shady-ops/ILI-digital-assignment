import { Comment } from "./comment.model";

export interface DocumentState {
  content: string;
  comments: Comment[];
  collaborators: Collaborator[];
}

export interface Collaborator {
  id: string;
  name: string;
  color: string;
  cursorPosition: { top: number; left: number };
}