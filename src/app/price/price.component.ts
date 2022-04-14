import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit {
  inputText: string = '';
  result = '';

  ngOnInit() {
    this.result = 'Введите число и нажмите кнопку "Форматировать"';
  }

  format() {
    const reg = /^[0-9]+[0-9\s]*([\.,]{1}[0-9\s]+)?$/;
    if (!reg.test(this.inputText)) {
      this.result = 'Некорректные данные для форматирования';
    } else {
      if (this.inputText.includes('.') || this.inputText.includes(',')) {
        this.inputText.replace(',', '.').replace(/ /g, '');
        this.inputText = this.inputText.substring(
          0,
          this.inputText.indexOf('.') + 4
        );
      }
      this.result = new Intl.NumberFormat('ru', {
        maximumFractionDigits: 2,
      })
        .format(parseFloat(this.inputText))
        .replace(',', '.');
    }
  }

  inputHandler(value: string) {
    this.inputText = value;
  }
}
