import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: `./row.component.html`,
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  public pos = [];

  constructor() {
    let i = 0, j = 0;
    let white = true;
    for (i = 0; i < 8; i++) {
      let y = i * 75;
      white = !white;
      for (j = 0; j < 8; j++) {
        white = !white;
        let x = j * 75;
        this.pos.push({
          'x': x,
          'coordinates': { 'x': j, 'y': i },
          'y': y,
          'white': white ? true : false,
          'isVisible': false,
          'imageSrc': '',
          'piece': ''
        });
      }
    }

    for (let i = 0; i < this.pos.length; i++) {

      // Black Pawns
      if (this.pos[i].coordinates.y == 1) {
        this.pos[i].isVisible = true;
        this.pos[i].imageSrc = "assets/images/pawn-b.png";
        this.pos[i].piece = "black pawn";
      }

      // White Pawns
      if (this.pos[i].coordinates.y == 6) {
        this.pos[i].isVisible = true;
        this.pos[i].imageSrc = "assets/images/pawn-w.png";
        this.pos[i].piece = "white pawn";
      }

      // Black First Line Formation
      if (this.pos[i].coordinates.y == 0) {
        switch (this.pos[i].coordinates.x) {
          case 0:
            this.pos[i].isVisible = true;
            this.pos[i].imageSrc = "assets/images/rooke-b.png";
            this.pos[i].piece = "black rooke";
            break;
          case 1:
            this.pos[i].isVisible = true;
            this.pos[i].imageSrc = "assets/images/knight-b.png";
            this.pos[i].piece = "black knight";
            break;
          case 2:
            this.pos[i].isVisible = true;
            this.pos[i].imageSrc = "assets/images/bishop-b.png";
            this.pos[i].piece = "black bishop";
            break;
          case 3:
            this.pos[i].isVisible = true;
            this.pos[i].imageSrc = "assets/images/queen-b.png";
            this.pos[i].piece = "black queen";
            break;
          case 4:
            this.pos[i].isVisible = true;
            this.pos[i].imageSrc = "assets/images/king-b.png";
            this.pos[i].piece = "black king";
            break;
          case 5:
            this.pos[i].isVisible = true;
            this.pos[i].imageSrc = "assets/images/bishop-b.png";
            this.pos[i].piece = "black bishop";
            break;
          case 6:
            this.pos[i].isVisible = true;
            this.pos[i].imageSrc = "assets/images/knight-b.png";
            this.pos[i].piece = "black knight";
            break;
          case 7:
            this.pos[i].isVisible = true;
            this.pos[i].imageSrc = "assets/images/rooke-b.png";
            this.pos[i].piece = "black rooke";
            break;
        }
      }

      // White First Line Formation
      if (this.pos[i].coordinates.y == 7) {
        switch (this.pos[i].coordinates.x) {
          case 0:
            this.pos[i].isVisible = true;
            this.pos[i].imageSrc = "assets/images/rooke-w.png";
            this.pos[i].piece = "white rooke";
            break;
          case 1:
            this.pos[i].isVisible = true;
            this.pos[i].imageSrc = "assets/images/knight-w.png";
            this.pos[i].piece = "white knight";
            break;
          case 2:
            this.pos[i].isVisible = true;
            this.pos[i].imageSrc = "assets/images/bishop-w.png";
            this.pos[i].piece = "white bishop";
            break;
          case 3:
            this.pos[i].isVisible = true;
            this.pos[i].imageSrc = "assets/images/queen-w.png";
            this.pos[i].piece = "white queen";
            break;
          case 4:
            this.pos[i].isVisible = true;
            this.pos[i].imageSrc = "assets/images/king-w.png";
            this.pos[i].piece = "white king";
            break;
          case 5:
            this.pos[i].isVisible = true;
            this.pos[i].imageSrc = "assets/images/bishop-w.png";
            this.pos[i].piece = "white bishop";
            break;
          case 6:
            this.pos[i].isVisible = true;
            this.pos[i].imageSrc = "assets/images/knight-w.png";
            this.pos[i].piece = "white knight";
            break;
          case 7:
            this.pos[i].isVisible = true;
            this.pos[i].imageSrc = "assets/images/rooke-w.png";
            this.pos[i].piece = "white rooke";
            break;
        }
      }
    }
  }

  ngOnInit(): void {

  }

}
