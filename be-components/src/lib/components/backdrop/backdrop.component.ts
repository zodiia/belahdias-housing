import { OverlayModule } from '@angular/cdk/overlay'
import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: '[backdrop]',
  standalone: true,
  imports: [OverlayModule],
  templateUrl: './backdrop.component.html',
  styleUrl: './backdrop.component.scss',
})
export class BackdropComponent {
  @Input() opened: boolean = false
  @Output() clicked = new EventEmitter<void>()

  onClick() {
    this.clicked.emit()
  }
}
