import { Component } from "@angular/core";
@Component({
  selector:'product',
  templateUrl:'./products.component.html'

})
export class productComponent{
addProduct:Boolean=true;
greet:String="";
enteredvalue:string="";
constructor(){
  setTimeout(()=>{
    this.addProduct=false;
  },3000)
}
onClick(){
  this.greet=this.enteredvalue+" added successfully!!!!!!!"
}
onUpdateProductName(event:any){
this.enteredvalue=(<HTMLInputElement>event.target).value;
}
}
