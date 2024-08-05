import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  colors: string[] = ['red', 'blue', 'green', 'yellow'];

  generated: string[] = [];
  userClicked: string[] = [];
  index: number = 0;
  level = -1;
  newColor = '';
  disable = true;
  score = 0;

  ngOnInit(): void {
    setTimeout(() => {
      console.log("Triggered")
      this.randomGenerator();
    }, 500);
  }

  setUser(color: string) {
    console.log('clicked');
    this.userClicked.push(color);
    let lastColor = this.userClicked.length - 1;
    if (this.userClicked[lastColor] === this.generated[lastColor]) {
      if (this.userClicked.length === this.generated.length) {
        this.userClicked = [];
        this.score++;
        this.randomGenerator();
      }
    } 
    else {
      this.disable = false;
    }
  }

  retry() {
    
  }

  randomGenerator() {
    this.index = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    this.generated.push(this.colors[this.index]);

    // console.log(this.generated);

    this.generated.forEach((color, i) => {
      setTimeout(() => {
        this.newColor = color;

        // Reset color after blinking
        setTimeout(() => {
          this.newColor = '';
        }, 500);
      }, 1000 * (i + 1));
    });
    //console.log('finished');
  }
}
