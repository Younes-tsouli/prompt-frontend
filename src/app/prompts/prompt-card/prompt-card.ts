import { Component, input, signal } from '@angular/core';
import { Prompt } from '../prompt.model';
@Component({
  selector: 'app-prompt-card',
  imports: [],
  templateUrl: './prompt-card.html',
  styleUrl: './prompt-card.scss',
})
export class PromptCard {
  prompt = input.required<Prompt>(); // c'est un signal
  count = signal(0);
  up() {
    this.count.update((prev) => prev + 1);
  }
  down() {
    this.count.update((prev) => prev - 1);
  }
  copyToClipboard() {
    void navigator.clipboard.writeText(this.prompt().content)
  }
  
}
