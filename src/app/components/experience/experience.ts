
import { Component, inject } from '@angular/core';
import { ExperienceService } from '../../services/experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  readonly experienceService = inject(ExperienceService);
}
