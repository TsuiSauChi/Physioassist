import { ArticleComponent } from './../../components/article/article';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { TimerComponent } from '../timer/timer';

/*
  Generated class for the Category page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-video',
  templateUrl: 'video.html'
})
export class VideoPage {

  @ViewChild(TimerComponent) timer: TimerComponent;

  constructor(private navController: NavController) { 
  }
 

  ngOnInit() {
    setTimeout(() => {
      this.timer.startTimer();
    }, 1000)
  }

}
