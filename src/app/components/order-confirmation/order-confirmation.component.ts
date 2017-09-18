import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "../../_services/shopping-cart.service";
import { saveAs } from 'file-saver';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: "app-order-confirmation",
  templateUrl: "./order-confirmation.component.html"
})
export class OrderConfirmationComponent implements OnInit {

  public constructor(private shoppingCartService: ShoppingCartService, private sanitizer: DomSanitizer) { }

  public ngOnInit(): void {
    debugger;
    // JSON.stringify(this.shoppingCartService.storage[0]
    var theJSON = JSON.stringify(this.shoppingCartService.retrieve());
    localStorage.setItem('userOrder',theJSON);
    //var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    // this.downloadJsonHref = uri;
    this.shoppingCartService.empty();
  }
}
