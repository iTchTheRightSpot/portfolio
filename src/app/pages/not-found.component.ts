import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<p class="pt-8 font-bold text-center text-3xl">
    404 Page Not Found
  </p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {}
