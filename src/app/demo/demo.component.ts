import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers : [ArithmeticService]
})
export class DemoComponent {
  public addtion : number = 0;
  public substraction : number = 0;

  constructor(private Obj : ArithmeticService) {
    this.addtion = this.Obj.add(50,40);
    this.substraction = this.Obj.sub(40,10);
  }
}
