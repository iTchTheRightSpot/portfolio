import { Component, input } from '@angular/core';
import { Card } from 'primeng/card';
import { Model } from './model';

@Component({
  selector: 'app-experience-section',
  imports: [Card],
  template: `
    <h2 class="mb-4 capitalize text-xl lg:text-2xl">{{ title() }}</h2>
    <div class="w-full gap-3 flex flex-col">
      @for (e of exp(); track e.title) {
        <p-card [header]="e.title">
          <p class="m-0 w-full">Lorem ipsum dolor sit amet...</p>
        </p-card>
      }
    </div>
  `
})
export class ExperienceSectionComponent {
  title = input.required<string>();
  exp = input.required<Model[]>();
}
