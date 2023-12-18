import { Component } from '@angular/core'
import { LayoutComponent } from '../../layout/layout/layout.component'
import { ContainerComponent } from '@belahdias-estate/components'
import { FormComponent } from './form/form.component'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LayoutComponent, ContainerComponent, FormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactPage {}
