import { Component, input } from '@angular/core';
import { Card } from 'primeng/card';
import { Model } from './model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-experience-section',
  imports: [Card, NgClass],
  template: `
    <h1
      class="mb-4 capitalize font-extrabold underline underline-offset-2 decoration-1 text-xl lg:text-2xl"
    >
      {{ title() }}
    </h1>
    <div class="w-full gap-3 flex flex-col">
      @for (e of exp(); track e.title) {
        <p-card>
          <ng-template #title>
            <div class="text-sm flex flex-nowrap justify-between">
              <p>{{ e.title }}</p>
              <p>{{ e.position }}</p>
            </div>
          </ng-template>
          <ng-template #subtitle>
            <div class="text-xs flex flex-nowrap justify-between">
              <p>{{ e.duration }}</p>

              <div class="flex gap-1">
                @for (tec of e.tech_stack; track tec) {
                  {{ tec }}
                }
              </div>
            </div>
          </ng-template>
          <div class="flex gap-2 flex-col">
            @for (des of e.description; track des) {
              <li class="text-xs" [innerHTML]="des"></li>
            }

            <div class="flex gap-2">
              @for (li of e.links; track li.link) {
                <a [href]="li.link" target="_blank" [ngClass]="li.type"></a>
              }
            </div>
          </div>
        </p-card>
      }
    </div>
  `
})
export class JobComponent {
  title = input.required<string>();
  exp = input.required<Model[]>();
}
