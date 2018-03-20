import { InterestsPage } from './../pages/interests/interests';
import { ProfilePage } from './../pages/profile/profile';
import { CategoryPage } from './../pages/category/category';
import { FeedPage } from './../pages/feed/feed';
import { ArticleComponent } from './../components/article/article';
import { VideoPage } from './../pages/video/video';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { TimerComponent } from './../pages/timer/timer';

@NgModule({
    declarations: [
        MyApp,
        CategoryPage,
        ProfilePage,
        TabsPage,
        FeedPage,
        InterestsPage,
        ArticleComponent,
        VideoPage,
        TimerComponent
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        CategoryPage,
        ProfilePage,
        TabsPage,
        FeedPage,
        InterestsPage,
        ArticleComponent,
        VideoPage,
        TimerComponent
    ],
    providers: []
})
export class AppModule { }
