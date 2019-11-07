import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome = 'Rafael';
  dataAniversario = new Date(1989, 7, 21);
  preco = 12855.21;
  troco = 0.57392;
}
