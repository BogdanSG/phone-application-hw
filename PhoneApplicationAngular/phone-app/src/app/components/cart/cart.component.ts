import { Component, OnInit, Input } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() title: string = 'Shopping Cart';
  @Input() clearText : string = 'Clear cart';
  @Input() emptyText : string = 'Cart is empty!';
  cart: any;

  constructor(private CartService: CartService) {

    this.cart = this.CartService.getCart();

  }//constructor

  ngOnInit() {

  }//ngOnInit

  RemoveItem(index){

    this.CartService.removePhone(index);

  }//RemoveItem

  ClearCart(){

    this.CartService.clearCart();

  }//ClearCart

}//CartComponent
