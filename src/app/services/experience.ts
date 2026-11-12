
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  // Skywalk Global joining date: February 12, 2023
  private readonly joiningYear = 2023;
  private readonly joiningMonth = 2;
  private readonly joiningDay = 12;

  readonly experience = signal(this.calculateExperience());

  private calculateExperience(): string {
    const today = new Date();

    let years = today.getFullYear() - this.joiningYear;
    let months = today.getMonth() + 1 - this.joiningMonth;

    if (today.getDate() < this.joiningDay) {
      months--;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years} ${years === 1 ? 'Year' : 'Years'} ` +
           `${months} ${months === 1 ? 'Month' : 'Months'}`;
  }

  refreshExperience(): void {
    this.experience.set(this.calculateExperience());
  }
}
