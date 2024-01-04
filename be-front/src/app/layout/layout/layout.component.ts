import { Component } from '@angular/core'
import { NavbarComponent } from '../navbar/navbar.component'
import { FooterComponent } from '../footer/footer.component'
import { TitleComponent } from '../title/title.component'

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, TitleComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
