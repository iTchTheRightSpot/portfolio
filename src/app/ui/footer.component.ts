import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '~env/environment';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="w-full mt-8 mb-2 flex gap-4 items-center justify-center">
      <a [href]="github" target="_blank" class="pi pi-github"></a> |
      <a [href]="linkedin" target="_blank" class="pi pi-linkedin"></a> |
      <a [href]="email" target="_blank" class="pi pi-envelope"></a> |
      <span class="text-xs">
        &copy; {{ year }} S.EJ.U. Development All Rights Reserved
      </span>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
  protected readonly github = environment.github;
  protected readonly linkedin = environment.linkedIn;
  protected readonly email = `mailto:${environment.email}`;
}
