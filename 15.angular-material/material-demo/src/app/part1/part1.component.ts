import { Component } from '@angular/core';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component {

  isChecked = true;

  colors = [{
      id: 1,
      name: 'Red'
    },
    {
      id: 2,
      name: 'Green'
    },
    {
      id: 3,
      name: 'Blue'
    }
  ];

  color = 2;

  minDate = new Date(2017, 1, 1);
  maxDate = new Date(2017, 8, 1);

  categories = [{
      name: 'Beginner'
    },
    {
      name: 'Intermediate'
    },
    {
      name: 'Advanced'
    }
  ];

  onChange($event) {
    console.log($event);
  }

  selected(category) {
    this.categories
      .filter(c => c !== category)
      .forEach(c => c['selected'] = false);

    category['selected'] = !category['selected'];
  }


}
