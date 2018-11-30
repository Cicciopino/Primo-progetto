import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pino',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  isLike = false;
  bgColor = "red";
  testo = "porco il barboncino";
  clickedButton = () => {
    this.isLike = !this.isLike;
    if (this.isLike === true) {
      this.bgColor = "green";
      this.testo = "porcino!!!";
    } else {
      this.bgColor = "red";
      this.testo = "porcone!!!!";
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
