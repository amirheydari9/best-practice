import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  title = 'FormArray Example in Angular Reactive forms';

  skillsForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([]),
    });
  }

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: ['', Validators.required],
      exp: ['', Validators.required],
    });
  }

  addSkills(): void {
    this.skills.push(this.newSkill());
  }

  removeSkill(i: number): void {
    this.skills.removeAt(i);
  }

  onSubmit(): void {
    console.log(this.skills.at(0).reset());
  }

}
