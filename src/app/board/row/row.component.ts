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
          'piece': '',
          'isError': false,
          'isSelected': false,
          'hasPawnMoved2': false
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

    // tile represents the tile you want to move to 
    // selectedTile represents the tile which has been selected and has some piece in it

  }

  selectTile(tile) {
    console.log(tile);


    let isSelected = false;
    let selectedPiece;

    for (let i = 0; i < this.pos.length; i++) {
      if (this.pos[i].isSelected == true) {
        isSelected = true;
        selectedPiece = this.pos[i];
        break;
      }
    }

    if (!isSelected) {
      for (let i = 0; i < this.pos.length; i++) {
        this.pos[i].isError = false;
        this.pos[i].isSelected = false;
      }

      if (tile.isVisible) {
        tile.isError = false;
        tile.isSelected = true;
      } else {
        tile.isError = true;
      }
    }

    switch (selectedPiece?.piece) {
      case "black pawn":
        if ((selectedPiece.coordinates.x === tile.coordinates.x) && (tile.coordinates.y <= selectedPiece.coordinates.y + (selectedPiece.hasPawnMoved2 ? 1 : 2)) && (tile.coordinates.y > selectedPiece.coordinates.y) && !tile.isVisible) {
          this.move(selectedPiece, tile, selectedPiece.imageSrc);
        }
        break;
      case "white pawn":
        if ((selectedPiece.coordinates.x === tile.coordinates.x) && (tile.coordinates.y + (selectedPiece.hasPawnMoved2 ? 1 : 2) >= selectedPiece.coordinates.y) && (tile.coordinates.y < selectedPiece.coordinates.y) && !tile.isVisible) {
          this.move(selectedPiece, tile, selectedPiece.imageSrc);
        }
        break;
      case "black rooke":
        if ((selectedPiece.coordinates.x == tile.coordinates.x || selectedPiece.coordinates.y == tile.coordinates.y) && (!tile.isVisible)) {
          this.move(selectedPiece, tile, selectedPiece.imageSrc)
        }
        break;
      case "white rooke":
        if ((selectedPiece.coordinates.x == tile.coordinates.x || selectedPiece.coordinates.y == tile.coordinates.y) && (!tile.isVisible)) {
          this.move(selectedPiece, tile, selectedPiece.imageSrc)
        }
        break;
      

    }

    if (tile === selectedPiece) {
      for (let i = 0; i < this.pos.length; i++) {
        if (this.pos[i].isSelected == true) {
          isSelected = false;
          this.pos[i].isSelected = false;
          selectedPiece = {};
          break;
        }
      }
    }
  }

  move(selectedPiece, tile, img) {

    if (selectedPiece.piece.includes('pawn')) {
      tile.hasPawnMoved2 = true;
    }
    selectedPiece.isVisible = false;
    selectedPiece.imageSrc = "";
    selectedPiece.isSelected = false;
    tile.isVisible = true;
    tile.imageSrc = img;
    tile.piece = selectedPiece.piece;
    selectedPiece.piece = "";
  }
}
