import { Component } from '@angular/core'
import { ContainerComponent } from '@belahdias-estate/components'

@Component({
  selector: 'layout-title',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {}
