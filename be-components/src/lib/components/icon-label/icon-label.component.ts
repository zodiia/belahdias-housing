import { Component, Input } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { IconDefinition, faQuestion } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'icon-label',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './icon-label.component.html',
  styleUrl: './icon-label.component.scss',
})
export class IconLabelComponent {
  @Input() icon: IconDefinition = faQuestion
}
