import { Component, signal } from '@angular/core';
import { PromptsList } from './prompts/prompts-list/prompts-list';


@Component({
  selector: 'app-root',
  imports: [PromptsList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('prompt-frontend');
}
