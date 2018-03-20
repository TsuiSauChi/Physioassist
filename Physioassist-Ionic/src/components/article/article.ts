import { Component, ViewChild } from '@angular/core';
import { ViewController, Slides, NavParams } from 'ionic-angular';

/*
  Generated class for the Article component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
    selector: 'article',
    templateUrl: 'article.html'
})
export class ArticleComponent {

    @ViewChild('mySlider') slider: Slides;
    sliderOptions: any;
    slideCount: number;
    numLikes: number;
    article: any;


    constructor(public viewCtrl: ViewController, public params: NavParams) {
     
    }


}
