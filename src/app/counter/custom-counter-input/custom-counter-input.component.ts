import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CounterState } from '../state/counter.state';
import { getName } from '../state/counter.selectors';
import { changeName, customIncrement } from '../state/counter.actions';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.scss'
})
export class CustomCounterInputComponent implements OnInit{
value:number = 0;
name:string ='';
name$!: Observable<string>
constructor(private store:Store<AppState>){}
  ngOnInit(): void {
   
    this.name$ = this.store.select(getName);
  }
onAdd(){
this.store.dispatch(customIncrement({count : +this.value}));
}
changeName(){
  this.store.dispatch(changeName());
}
}
