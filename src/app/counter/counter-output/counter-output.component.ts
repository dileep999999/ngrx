import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CounterState } from '../state/counter.state';
import { getCounter } from '../state/counter.selectors';


@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss'
})
export class CounterOutputComponent implements OnInit{
  counter: number = 0;
  counterSubscription!: Subscription;
  counter$!: Observable<number>;
  constructor(private store: Store<{counter:CounterState}>){}
  
  ngOnInit(): void {
    
    this.counter$ = this.store.select(getCounter);
  }

}
