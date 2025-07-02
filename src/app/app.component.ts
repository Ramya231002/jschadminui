import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngIf, *ngFor, etc.

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Required for Angular directives
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
