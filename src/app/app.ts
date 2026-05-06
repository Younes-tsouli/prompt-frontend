import { Component, signal } from '@angular/core';
import { PromptsList } from './prompts/prompts-list/prompts-list';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [PromptsList, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('prompt-frontend');
}
