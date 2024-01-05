import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  serachText: string = 'Mens Wear';

  updateSearchText(event: any) {
    this.serachText = event.target.value;
  }
}
