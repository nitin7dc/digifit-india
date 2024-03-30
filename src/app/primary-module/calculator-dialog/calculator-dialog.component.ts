import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator-dialog',
  templateUrl: './calculator-dialog.component.html',
  styleUrls: ['./calculator-dialog.component.scss'],
})
export class CalculatorDialogComponent implements OnInit {
  calculatorForm: FormGroup;
  showResults: boolean = false;
  bmr: number;
  tdee: number;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.calculatorForm = this.formBuilder.group({
      sex: ['', Validators.required],
      age: [null, Validators.required],
      height: [null, Validators.required],
      weight: [null, Validators.required],
      activityLevel: [null, Validators.required],
    });
  }

  calculate() {
    console.log("ok");
    
    console.log(this.calculatorForm);
    if (this.calculatorForm.valid) {
      console.log(this.calculatorForm);
    
      const formValues = this.calculatorForm.value;
      const sex = formValues.sex.toLowerCase();
      const age = formValues.age;
      const height_cm = formValues.height;
      const weight_kg = formValues.weight;
      const activityLevel = formValues.activityLevel;

      // Calculate BMR
      if (sex === 'male') {
        this.bmr = 10 * weight_kg + 6.25 * height_cm - 5 * age + 5;
      } else if (sex === 'female') {
        this.bmr = 10 * weight_kg + 6.25 * height_cm - 5 * age - 161;
      }

      // Calculate TDEE based on activity level
      const activityFactors = {
        1: 1.2,
        2: 1.375,
        3: 1.55,
        4: 1.725,
        5: 1.9,
      };
      this.tdee = this.bmr * activityFactors[activityLevel];

      // Show results
      this.showResults = true;
    }
  }
}
