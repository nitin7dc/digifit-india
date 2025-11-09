import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bmr-calculator',
  templateUrl: './bmr-calculator.component.html',
  styleUrls: ['./bmr-calculator.component.scss'],
})
export class BmrCalculatorComponent {
  bmrForm: FormGroup;
  showResult = false;
  bmrResult: number | null = null;

  constructor(private fb: FormBuilder) {
    this.bmrForm = this.fb.group({
      age: [
        null,
        [Validators.required, Validators.min(1), Validators.max(120)],
      ],
      gender: ['male', Validators.required],
      height: [
        null,
        [Validators.required, Validators.min(50), Validators.max(300)],
      ],
      weight: [
        null,
        [Validators.required, Validators.min(20), Validators.max(500)],
      ],
    });
  }

  calculateBMR(): void {
    if (this.bmrForm.invalid) {
      this.markFormGroupTouched();
      this.showResult = false;
      return;
    }

    const { age, gender, height, weight } = this.bmrForm.value;
    const ageValue = Number(age);
    const heightValue = Number(height);
    const weightValue = Number(weight);
    const normalizedGender = (gender as string).toLowerCase();

    let bmr =
      10 * weightValue + 6.25 * heightValue - 5 * ageValue;

    if (normalizedGender === 'male') {
      bmr += 5;
    } else {
      bmr -= 161;
    }

    this.bmrResult = Math.round(bmr);
    this.showResult = true;
  }

  resetForm(): void {
    this.bmrForm.reset({
      age: null,
      gender: 'male',
      height: null,
      weight: null,
    });
    this.showResult = false;
    this.bmrResult = null;
  }

  getErrorMessage(controlName: string): string {
    const control = this.bmrForm.get(controlName);

    if (!control) {
      return '';
    }

    if (control.hasError('required')) {
      return `${this.toTitleCase(controlName)} is required`;
    }

    if (control.hasError('min')) {
      const minValue = control.getError('min')?.min;
      return `${this.toTitleCase(controlName)} must be at least ${minValue}`;
    }

    if (control.hasError('max')) {
      const maxValue = control.getError('max')?.max;
      return `${this.toTitleCase(controlName)} must be at most ${maxValue}`;
    }

    return '';
  }

  private markFormGroupTouched(): void {
    Object.keys(this.bmrForm.controls).forEach((key) => {
      const control = this.bmrForm.get(key);
      control?.markAsTouched();
    });
  }

  private toTitleCase(value: string): string {
    return value
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (match) => match.toUpperCase());
  }
}


