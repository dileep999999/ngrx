import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { decrement, increment, reset } from '../state/counter.actions';
import { AppState } from '../../store/app.state';


@Component({
  selector: 'app-counter-buttons',
  standalone: true,
  imports: [],
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.scss'
})
export class CounterButtonsComponent {
constructor(private store: Store<AppState>){
}
onIncrement(){
this.store.dispatch(increment());
}
onDecrement(){
  this.store.dispatch(decrement());
}
onReset(){
this.store.dispatch(reset());
}

}
