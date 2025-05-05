import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
  signal
} from '@angular/core';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

const key = 'session';

@Component({
  selector: 'app-emit',
  imports: [Button, Dialog, FloatLabel, InputText, ReactiveFormsModule],
  template: `
    @if (!isSet()) {
      <p-dialog
        header="Who is stopping by today? 😃"
        [modal]="true"
        [(visible)]="isVisible"
        [style]="{ width: '25rem' }"
      >
        <form [formGroup]="fb" class="w-full p-2 flex flex-col gap-3">
          <p-floatlabel variant="on">
            <input
              class="w-full"
              pInputText
              id="name"
              formControlName="name"
              autocomplete="off"
            />
            <label for="name">Name</label>
          </p-floatlabel>
          <div class="flex justify-end gap-2">
            <p-button
              label="Ignore"
              severity="secondary"
              (click)="setSession(); isVisible.set(false)"
            />
            <p-button
              label="Notify"
              [disabled]="fb.invalid"
              (click)="
                setSession();
                emit.emit(fb.controls['name'].value!);
                isVisible.set(false)
              "
            />
          </div>
        </form>
      </p-dialog>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmitComponent {
  state = input.required<number>();
  readonly emit = output<string>();

  protected readonly isVisible = signal(true);

  protected readonly fb = inject(FormBuilder).group({
    name: new FormControl<string>('', [Validators.required])
  });

  protected readonly isSet = () => sessionStorage.getItem(key);
  protected readonly setSession = () =>
    this.isSet() ? {} : sessionStorage.setItem(key, 'emit');
}
