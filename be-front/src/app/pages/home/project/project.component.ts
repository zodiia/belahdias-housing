import { Component, Input } from '@angular/core'
import { ContainerComponent, IconLabelComponent } from '@belahdias-estate/components'
import { faLocationDot, faServer } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'home-project',
  standalone: true,
  imports: [ContainerComponent, IconLabelComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input() projectId: string = ''
  @Input() projectName: string = ''
  @Input() server: string = ''
  @Input() location: string = ''
  @Input() description: string = ''

  faLocationDot = faLocationDot
  faServer = faServer
}
