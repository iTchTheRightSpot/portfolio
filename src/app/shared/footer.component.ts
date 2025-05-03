import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Divider } from 'primeng/divider';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="w-full mt-8 mb-2 flex gap-4 items-center justify-center">
      <a [href]="github" target="_blank" class="pi pi-github"></a>
      <p-divider layout="vertical" />
      <a [href]="linkedin" target="_blank" class="pi pi-linkedin"></a>
      <p-divider layout="vertical" />
      <a [href]="email" target="_blank" class="pi pi-envelope"></a>
      <p-divider layout="vertical" />
      <span>&copy; {{ year }} S.EJ.U. Development All Rights Reserved</span>
    </footer>
  `,
  imports: [Divider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
  protected readonly github = 'https://github.com/iTchTheRightSpot';
  protected readonly linkedin =
    'https://www.linkedin.com/in/somto-uluabuike-2924ab217/';
  protected readonly email = 'mailto:emmanueluluabuike@gmail.com';
}
