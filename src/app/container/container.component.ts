import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  name = '';
  onNameChange(event: any) {
    this.name = event.target.value;
  }
}
