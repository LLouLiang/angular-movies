import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root', // identifer for component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-movies';
  ngOnInit(): void {
    
  }
  handleRating(rate : number){
    alert(`user input rate` + rate);
  }
  txtPrice : number = 0;
  buyThisMovie(qty : number, txtPrice){
    if(qty * 9.9 > txtPrice) {
      return "You still need to paid $" + (qty * 9.9 - txtPrice) + "more!";
    } else {
      return "Please find your changes $" + (txtPrice - qty * 9.9 ) + ", thank you for purchasing.";
    }
  }
  
}
