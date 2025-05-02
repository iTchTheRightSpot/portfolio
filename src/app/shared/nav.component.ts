import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ModeComponent } from './mode.component';
import { Menubar } from 'primeng/menubar';
import { rootroutes } from '~portfolio/app.routes';

@Component({
  selector: 'app-nav',
  imports: [ModeComponent, Menubar],
  template: `
    <p-menubar [model]="items">
      <ng-template #end>
        <app-mode />
      </ng-template>
    </p-menubar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  protected readonly items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: `/${rootroutes.HOME}`
    },
    {
      label: 'Experience',
      icon: 'pi pi-building',
      routerLink: `${rootroutes.EXPERIENCE}`
    }
  ];
}
