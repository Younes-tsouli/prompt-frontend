import { Component, inject,  } from '@angular/core';
import { PromptCard } from '../prompt-card/prompt-card';
import { PrompService } from '../promp-service';
import {toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-prompts-list',
  standalone: true,
  imports: [PromptCard],
  templateUrl: './prompts-list.html',
  styleUrl: './prompts-list.scss',
})
export class PromptsList {
  promptService = inject(PrompService)
  prompts = toSignal(this.promptService.getPrompts(), {initialValue : []}) // on le rend un Signal

  constructor() {
  }
}

