import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  //store the quote data here
  person: string;
  text: string;

  constructor (private viewCtrl: ViewController,
              private navParams: NavParams) {

    }

    ionViewDidLoad() {
      this.person = this.navParams.get('person');
      this.text = this.navParams.get('text')

    }

  onClose() {
    this.viewCtrl.dismiss();

  }
}
