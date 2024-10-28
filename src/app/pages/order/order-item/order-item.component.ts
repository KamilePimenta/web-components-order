import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-order-item',
  standalone: true,
  imports: [],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.scss'
})
export class OrderItemComponent {
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imgUrl: string = '';
  @Input() price: number = 0;
  @Input() discount: number = 0;

  @Output() buy: EventEmitter<number> = new EventEmitter();

  hanldleBuy() {
    this.buy.emit(this.id);
  }
}
