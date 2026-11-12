import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ExperienceService } from '../../services/experience';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
readonly experienceService = inject(ExperienceService);
}
