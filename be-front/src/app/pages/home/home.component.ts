import { Component } from '@angular/core'
import { LayoutComponent } from '../../layout/layout/layout.component'
import { ProjectComponent } from './project/project.component'
import { ContainerComponent } from '@belahdias-estate/components'

@Component({
  selector: 'home-component',
  standalone: true,
  imports: [LayoutComponent, ProjectComponent, ContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomePage {}
