import { Component } from '@angular/core';
import { IonicPage, ModalController} from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  // getting our quotes
  quotes: Quote[];

  constructor (private quotesService: QuotesService,
  private modalCtrl: ModalController) {

  }

    ionViewWillEnter() {
      this.quotes = this.quotesService.getFavoriteQuotes();
    }

    onViewQuote(quote: Quote) {
      const modal = this.modalCtrl.create(QuotePage, quote);
      modal.present();
      
    }
  


}
