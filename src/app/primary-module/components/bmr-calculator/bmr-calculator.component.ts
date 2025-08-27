import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bmr-calculator',
  templateUrl: './bmr-calculator.component.html',
  styleUrls: ['./bmr-calculator.component.scss']
})
export class BmrCalculatorComponent implements OnInit {
  bmrForm: FormGroup;
  bmrResult: number | null = null;
  showResult = false;

  constructor(private fb: FormBuilder) {
    this.bmrForm = this.fb.group({
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      gender: ['M', Validators.required],
      height: ['', [Validators.required, Validators.min(50), Validators.max(300)]],
      weight: ['', [Validators.required, Validators.min(20), Validators.max(500)]]
    });
  }

  ngOnInit(): void {}

  calculateBMR(): void {
    if (this.bmrForm.valid) {
      const { age, gender, height, weight } = this.bmrForm.value;
      
      let bmr: number;
      if (gender === 'M') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
      } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
      }
      
      this.bmrResult = Math.round(bmr);
      this.showResult = true;
    } else {
      this.markFormGroupTouched();
    }
  }

  resetForm(): void {
    this.bmrForm.reset({ gender: 'M' });
    this.bmrResult = null;
    this.showResult = false;
  }

  private markFormGroupTouched(): void {
    Object.keys(this.bmrForm.controls).forEach(key => {
      const control = this.bmrForm.get(key);
      control?.markAsTouched();
    });
  }

  getErrorMessage(controlName: string): string {
    const control = this.bmrForm.get(controlName);
    if (control?.hasError('required')) {
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is required`;
    }
    if (control?.hasError('min')) {
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} must be at least ${control.errors?.['min']}`;
    }
    if (control?.hasError('max')) {
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} must be at most ${control.errors?.['max']}`;
    }
    return '';
  }
}
