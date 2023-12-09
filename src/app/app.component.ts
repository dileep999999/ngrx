import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter/counter.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CounterComponent, RouterModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Samplengrx';
}
