import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
      hobbies: this.fb.array([]),
      address: this.fb.group({
        city: [null, Validators.required],
        description: [null, Validators.required]
      })
    });
  }

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  get hobbies(): FormArray {
    return this.skillsForm.get('hobbies') as FormArray;
  }

  get address(): FormGroup {
    return this.skillsForm.get('address') as FormGroup;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: ['', Validators.required],
      exp: ['', Validators.required],
    });
  }

  newHobby(): FormControl {
    return this.fb.control(null, Validators.required);
  }

  addSkills(): void {
    this.skills.push(this.newSkill());
  }

  addHobbies(): void {
    console.log(this.newHobby());
    this.hobbies.push(this.newHobby());
  }

  removeSkill(i: number): void {
    this.skills.removeAt(i);
  }

  removeHobby(i: number): void {
    this.hobbies.removeAt(i);
  }

  onSubmit(): void {
    console.log(this.skillsForm.value);
  }

}
