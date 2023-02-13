import { Component } from '@angular/core';

@Component({
  selector: '.app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
name:string='Ayush';
age:number=26;
test(){
if(this.age>18){
  return 'adult';
}else{
  return 'child';
}
}
}
