import { Component, inject, Input } from '@angular/core';
import { Prompt } from '../prompt.model';
import { PromptCard } from '../prompt-card/prompt-card';
import { PrompService } from '../promp-service';

@Component({
  selector: 'app-prompts-list',
  imports: [PromptCard],
  templateUrl: './prompts-list.html',
  styleUrl: './prompts-list.scss',
})
export class PromptsList {
  promptService = inject(PrompService)
  prompts = this.promptService.getPrompts()
  
}
