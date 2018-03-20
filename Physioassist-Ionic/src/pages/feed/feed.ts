import { ArticleComponent } from './../../components/article/article';

import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, ModalController } from 'ionic-angular';

/*
  Generated class for the Feed page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  @ViewChild('mySlider') slider: Slides;
  sliderOptions: any;
  slideCount: number;
  articleOpen: boolean;
  articles: any[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

}
