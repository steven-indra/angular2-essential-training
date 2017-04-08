import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-image',
  templateUrl: 'app/image-switcher.component.html',
  styleUrls: ['app/image-switcher.component.css']
})
export class ImageSwitcherComponent {
  index = 1;

  onNext(){
    this.index +=1;
    if (this.index == 5)
    {
      this.index = 1;
    }
  }

  onPrev(){
    this.index -=1;
    if (this.index == 0)
    {
      this.index = 4;
    }
  }

  images = [
    {
      id :1,
      path: "media/01.png"
    },
    {
      id :2,
      path: "media/02.png"
    },
    {
      id :3,
      path: "media/03.png"
    },
    {
      id :4,
      path: "media/04.png"
    }
  ];
}
