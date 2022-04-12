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
      console.log(reg.test(this.inputText));
      this.result = new Intl.NumberFormat('ru', {
        maximumFractionDigits: 2,
      })
        .format(parseFloat(this.inputText.replace(',', '.').replace(/ /g, '')))
        .replace(',', '.');
    }

    //   let num = parseFloat(this.inputText);
    // if (num) {
    //   this.result = new Intl.NumberFormat('ru', {
    //     maximumFractionDigits: 2,
    //   })
    //     .format(num)
    //     .replace(',', '.');
    //   } else {
    //     this.result = 'Некорректные данные для форматирования';
    //     console.log('4', this.result);
    //   }
  }

  inputHandler(value: string) {
    this.inputText = value;
  }
}
