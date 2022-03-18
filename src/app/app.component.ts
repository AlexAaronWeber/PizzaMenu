import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chirpus Pizza';
  menu:MenuItem[] = [
    {
      name:"Pizza",
      category:"Dinner",
      price: 14.49
    },
    {
      name:"Famous Wings",
      category:"Dinner",
      price: 12.99
    },
    {
      name:"Mac and Cheese",
      category:"Dinner",
      price: 10.99
    },
    {
      name:"French Fries",
      category:"Side",
      price: 3.99
    },
    {
      name:"Broccoli",
      category:"Side",
      price: 2.49
    },
    {
      name:"Cheesecake",
      category:"Dessert",
      price: 7.99
    },
    {
      name:"Chocolate Cake",
      category:"Dessert",
      price: 6.89
    },
    {
      name:"Cola",
      category:"Beverage",
      price: 1.99
    },
    {
      name:"Coffee",
      category:"Beverage",
      price: 0.99
    },
  ]



}
