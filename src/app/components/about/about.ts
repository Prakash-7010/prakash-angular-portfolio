
import { Component, inject } from '@angular/core';
import { ExperienceService } from '../../services/experience';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  readonly experienceService = inject(ExperienceService);
}
