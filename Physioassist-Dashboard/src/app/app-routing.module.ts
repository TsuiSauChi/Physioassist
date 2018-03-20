import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomePage } from './home/home.component';

const routes: Routes = [
    // { path: 'transaction', component: TransactionComponent },
    { path: '', component: HomePage },
    { path: '**', redirectTo: '' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
