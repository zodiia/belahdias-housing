import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  readonly servers = [
    { value: '', display: '' },
    { value: 'Cerberus', display: 'Cerberus' },
    { value: 'Louisoix', display: 'Louisoix' },
    { value: 'Moogle', display: 'Moogle' },
    { value: 'Omega', display: 'Omega' },
    { value: 'Phantom', display: 'Phantom' },
    { value: 'Ragnarok', display: 'Ragnarok' },
    { value: 'Sagittarius', display: 'Sagittarius' },
    { value: 'Spriggan', display: 'Spriggan' },
  ] as const
  readonly districts = [
    { value: '', display: '' },
    { value: 'The Lavender Beds', display: 'The Lavender Beds' },
    { value: 'Mist', display: 'Mist' },
    { value: 'The Goblet', display: 'The Goblet' },
    { value: 'Shirogane', display: 'Shirogane' },
    { value: 'Empyreum', display: 'Empyreum' },
  ] as const
  readonly houseSizes = [
    { value: '', display: '' },
    { value: 'Small', display: 'Small - 15 million Gils' },
    { value: 'Medium', display: 'Medium - 20 million Gils' },
    { value: 'Large', display: 'Large - 25 million Gils' },
  ] as const

  formControl = new FormGroup({
    discordId: new FormControl(''),
    igName: new FormControl(''),
    server: new FormControl(''),
    district: new FormControl(''),
    houseSize: new FormControl(''),
    furnituresBudget: new FormControl(''),
    message: new FormControl(''),
  })

  onSend() {
    console.log(this.formControl)
  }
}
