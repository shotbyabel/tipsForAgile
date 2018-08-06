import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import { QuotesService } from '../../services/quotes';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quoteGroup: {category: string, quotes: Quote[], icon: string};
  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    // inject the quote service
    private quotesService: QuotesService) {
  }
  
  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }
  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
    // console.log('ionViewDidLoad QuotesPage');
    //add the "elvis operator" ? in the template to use this method}

  onAddToFavorite(selectedQuote: Quote){
  const alert = this.alertCtrl.create({
    title: 'Add Quote',
    subTitle: 'Are you sure?',
    message: 'So you want to add this quote?',
    buttons: [
      {
        text: 'Yep!, Lets do it!',
        handler: () => {
          this.quotesService.addQuoteToFavorites(selectedQuote);
          // console.log('Ok');
        }
      },
      {
        text: 'Nope, Lets not!',
        role: 'cancel',
        handler: () => {
          console.log('Cancelled!');
        }
      }
      ]
    });

    alert.present();
  }
}
