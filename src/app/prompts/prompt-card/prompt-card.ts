import { Component, input, signal } from '@angular/core';
import { Prompt } from '../prompt.model';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-prompt-card',
  standalone: true,
  imports: [ButtonModule, CardModule, TagModule],
  templateUrl: './prompt-card.html',
  styleUrl: './prompt-card.scss',
})
export class PromptCard {
  prompt = input.required<Prompt>(); // c'est un signal
  up() {
    this.prompt().score += 1;
  }
  down() {
    this.prompt().score -= 1;
  }
  copyToClipboard() {
    void navigator.clipboard.writeText(this.prompt().content);
  }
}
