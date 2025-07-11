import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Button } from 'primeng/button';
import { Image } from 'primeng/image';

@Component({
  selector: 'app-home',
  imports: [Button, Image],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex gap-2 mt-8">
      <div class="w-full mb-4 flex justify-center">
        <p-image
          src="profile.PNG"
          imageClass="rounded-lg"
          alt="profile"
          width="250"
        />
      </div>
      <div class="flex flex-col items-center justify-center text-center">
        <h1 class="text-xl lg:text-3xl">Somto Uluabuike</h1>
        <p class="my-4 text-sm lg:text-base">
          B.Sc General Science graduate from
          <span class="text-[var(--p-primary-color)]">
            Lakehead University</span
          >
          , Full-Stack Developer skilled in building scalable apps, with solid
          knowledge of computer networks, protocol and distributed systems.
        </p>
        <p-button label="Resume" (onClick)="resume()" />
      </div>
    </div>
  `
})
export class HomeComponent {
  protected readonly resume = () => window.open('resume.pdf', '_blank');
}
