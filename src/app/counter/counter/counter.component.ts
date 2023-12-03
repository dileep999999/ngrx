import { Component } from '@angular/core';
import { CounterButtonsComponent } from '../counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { CustomCounterInputComponent } from '../custom-counter-input/custom-counter-input.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CounterButtonsComponent, CounterOutputComponent, CustomCounterInputComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {


}
