import { VideoPage } from '../video/video';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

/*
  Generated class for the Category page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

  category: string;  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) { 
    this.category = 'travel';
  }

  openArticle() {
    this.navCtrl.push(VideoPage)
  }

}
