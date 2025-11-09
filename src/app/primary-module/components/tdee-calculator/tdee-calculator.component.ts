import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tdee-calculator',
  templateUrl: './tdee-calculator.component.html',
  styleUrls: ['./tdee-calculator.component.scss'],
})
export class TdeeCalculatorComponent implements OnInit {
  calculatorForm!: FormGroup;
  showResults = false;
  bmr: number | null = null;
  tdee: number | null = null;
  selectedActivityLabel = '';
  calorieTargets = {
    fatLoss: null as number | null,
    maintenance: null as number | null,
    muscleGain: null as number | null,
  };

  readonly activityLevels = [
    {
      value: 1,
      label: 'Sedentary',
      description: 'Little to no exercise / desk job',
      factor: 1.2,
    },
    {
      value: 2,
      label: 'Lightly Active',
      description: '1–3 light workouts per week',
      factor: 1.375,
    },
    {
      value: 3,
      label: 'Moderately Active',
      description: '3–5 moderate workouts per week',
      factor: 1.55,
    },
    {
      value: 4,
      label: 'Very Active',
      description: '5–6 intense workouts per week',
      factor: 1.725,
    },
    {
      value: 5,
      label: 'Athlete',
      description: 'Daily training + additional cardio',
      factor: 1.9,
    },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.calculatorForm = this.formBuilder.group({
      sex: ['male', Validators.required],
      age: [
        null,
        [Validators.required, Validators.min(1), Validators.max(120)],
      ],
      height: [
        null,
        [Validators.required, Validators.min(50), Validators.max(300)],
      ],
      weight: [
        null,
        [Validators.required, Validators.min(20), Validators.max(500)],
      ],
      activityLevel: [this.activityLevels[0].value, Validators.required],
    });
  }

  calculate(): void {
    if (this.calculatorForm.invalid) {
      this.markFormGroupTouched();
      this.showResults = false;
      return;
    }

    const { sex, age, height, weight, activityLevel } =
      this.calculatorForm.value;

    const normalizedSex = (sex as string).toLowerCase();
    const ageValue = Number(age);
    const heightValue = Number(height);
    const weightValue = Number(weight);
    const activityValue = Number(activityLevel);

    let bmr = 10 * weightValue + 6.25 * heightValue - 5 * ageValue;

    if (normalizedSex === 'male') {
      bmr += 5;
    } else {
      bmr -= 161;
    }

    this.bmr = Math.round(bmr);

    const activity = this.activityLevels.find(
      (level) => level.value === activityValue
    );
    const factor = activity?.factor ?? this.activityLevels[0].factor;

    this.tdee = Math.round(this.bmr * factor);
    this.selectedActivityLabel = activity?.label ?? '';

    this.calorieTargets = {
      fatLoss: Math.round(this.tdee * 0.85),
      maintenance: this.tdee,
      muscleGain: Math.round(this.tdee * 1.15),
    };

    this.showResults = true;
  }

  resetForm(): void {
    this.calculatorForm.reset({
      sex: 'male',
      age: null,
      height: null,
      weight: null,
      activityLevel: this.activityLevels[0].value,
    });
    this.showResults = false;
    this.bmr = null;
    this.tdee = null;
    this.selectedActivityLabel = '';
    this.calorieTargets = {
      fatLoss: null,
      maintenance: null,
      muscleGain: null,
    };
  }

  getErrorMessage(controlName: string): string {
    const control = this.calculatorForm.get(controlName);
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
    Object.keys(this.calculatorForm.controls).forEach((key) => {
      const control = this.calculatorForm.get(key);
      control?.markAsTouched();
    });
  }

  private toTitleCase(value: string): string {
    return value
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (match) => match.toUpperCase());
  }
}


