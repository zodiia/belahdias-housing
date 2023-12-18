import { Component } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'navbar-links',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss',
})
export class LinksComponent {
  faHouse = faHouse
}
