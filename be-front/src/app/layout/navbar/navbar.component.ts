import { Component, OnInit } from '@angular/core'
import { BreakpointObserver } from '@angular/cdk/layout'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons'
import { BackdropComponent } from '@belahdias-estate/components'
import { LinksComponent } from './links/links.component'

@Component({
  selector: 'layout-navbar',
  standalone: true,
  imports: [FontAwesomeModule, BackdropComponent, LinksComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  faHouse = faHouse
  faBars = faBars

  smallScreen = false
  smallNavOpen = false

  constructor(public readonly breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe(['(min-width: 768px)']).subscribe((state) => {
      this.smallScreen = state.matches
    })
  }

  onClick() {
    this.smallNavOpen = true
  }

  closeBackdrop() {
    this.smallNavOpen = false
  }
}
