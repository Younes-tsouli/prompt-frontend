import { Author } from './author.model';
import { Category } from './category.model';

export interface Prompt {
  id: number;
  title: string;
  content: string;
  score: number;  
  createdAt: string;
  category: Category;
  author: Author;
  userVote: null | 'up' | 'down';
}
