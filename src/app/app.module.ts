import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import {
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatBadgeModule,
    MatTableModule,
} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AuthsComponent } from './auths/auths.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        UsersComponent,
        AuthsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        AppRoutingModule,
        MatMenuModule,
        MatButtonModule,
        MatBadgeModule,
        MatTableModule,
    ],
    exports: [

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
