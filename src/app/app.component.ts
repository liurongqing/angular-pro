import { Component } from '@angular/core';
export interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
  }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
    tiles: Tile[] = [
        {text: '头部导航', cols: 10, rows: 1, color: 'lightblue'},
        {text: '菜单', cols: 2, rows: 4, color: 'lightgreen'},
        {text: '内容', cols: 8, rows: 5, color: 'lightpink'},
      ];
}
