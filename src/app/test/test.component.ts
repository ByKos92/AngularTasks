import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [],
})
export class TestComponent {
  myText: string = '';
  println(text: string) {
    this.myText = text;
  }

  array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
