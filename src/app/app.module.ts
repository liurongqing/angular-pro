import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import {
    MatIconModule,
    MatListModule,
    MatGridListModule,
} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        UsersComponent,
    ],
    imports: [
        BrowserModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        AppRoutingModule,
    ],
    exports: [
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
