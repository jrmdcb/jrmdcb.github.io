import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-header.component.html',
  styleUrl: './hero-header.component.scss',
})
export class HeroHeaderComponent {}
