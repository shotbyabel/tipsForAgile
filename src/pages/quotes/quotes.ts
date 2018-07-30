import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { NavParams } from 'ionic-angular';
// import { Quote } from '../../../node_modules/@angular/compiler';
import { Quote } from "../../data/quote.interface";

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quoteGroup: {category: string, quotes: Quote[], icon: string};
  constructor(private navParams: NavParams) {
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }



  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
    // console.log('ionViewDidLoad QuotesPage');
    //add the "elvis operator" ? in the template to use this method
  }

}
