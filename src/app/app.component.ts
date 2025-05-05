import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '~ui/nav.component';
import { FooterComponent } from '~ui/footer.component';
import { AppService } from '~portfolio/app.service';
import { Subject, switchMap } from 'rxjs';
import { EmitComponent } from '~ui/emit.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavComponent,
    FooterComponent,
    EmitComponent,
    AsyncPipe
  ],
  template: `
    <div class="w-full m-auto p-2 xl:p-0 xl:max-w-4xl m-auto">
      <app-nav />
      <router-outlet />
      <app-footer />
      <app-emit [state]="(state | async) || 200" (emit)="emit.next($event)" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  protected readonly ser = inject(AppService);

  protected readonly emit = new Subject<string>();
  protected readonly state = this.emit
    .asObservable()
    .pipe(switchMap(name => this.ser.emit(name.trim())));
}
