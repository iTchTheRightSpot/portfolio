import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Divider } from 'primeng/divider';
import { ExperienceSectionComponent } from '~pages/ui/experience-section.component';

@Component({
  selector: 'app-experience',
  imports: [Divider, ExperienceSectionComponent],
  template: `
    <div class="w-full my-8 grid gap-2 grid-cols-1 md:grid-cols-2">
      <app-experience-section [title]="'experience'" [exp]="exs" />
      <div class="w-full flex">
        <p-divider layout="vertical" />
        <app-experience-section [title]="'projects'" [exp]="projs" />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  protected readonly exs = [
    {
      title: 'S.EJ.U Development',
      position: 'Founder/Full stack developer',
      duration: 'Jan 2025 - Present',
      description: ['']
    },
    {
      title: 'Fardelins',
      position: 'Software developer',
      duration: 'June 2025 - Feb 2025',
      description: ['']
    },
    {
      title: 'Lakehead University',
      position: 'Founder/Full stack developer',
      duration: 'Jan 2025 - Present',
      description: ['']
    }
  ];
  protected readonly projs = [
    {
      title: 'Speak',
      position: 'Founder/Full stack developer',
      duration: 'Jan 2025 - Present',
      description: ['']
    },
    {
      title: 'Reservation Application',
      position: 'Founder/Full stack developer',
      duration: 'Jan 2025 - Present',
      description: ['']
    },
    {
      title: 'Capstone Project',
      position: 'Founder/Full stack developer',
      duration: 'Jan 2025 - Present',
      description: ['']
    },
    {
      title: 'Virtual Private Server',
      position: 'System Administrator',
      duration: 'Jan 2023 - Present',
      description: ['']
    }
  ];
}
