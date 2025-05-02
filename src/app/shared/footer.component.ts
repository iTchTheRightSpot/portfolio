import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="w-full mt-8 mb-2 flex gap-4 items-center justify-center">
      <a [href]="github" target="_blank">GitHub</a>
      <a [href]="linkedin" target="_blank">LinkedIn</a>
      <span>&copy; {{ year }} S.EJ.U. Development All Rights Reserved</span>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
  protected readonly github = 'https://github.com/iTchTheRightSpot';
  protected readonly linkedin =
    'https://www.linkedin.com/in/somto-uluabuike-2924ab217/';
}
