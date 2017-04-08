import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-popup',
  templateUrl: 'app/popup.component.html',
  styleUrls: ['app/popup.component.css']
})
export class PopupComponent {
  @Input() mediaItem;
  @Output() close = new EventEmitter();
  hidden;
  index = 0;
  isVisible(){
    this.hidden = this.mediaItem ? "" : "hidden";
     return this.hidden;
  }
  onClose() {
    this.close.emit();
  }

  onNext(){
    this.index +=1;
    if (this.index == 4)
    {
      this.index = 0;
    }
  }

  onPrev(){
    this.index -=1;
    if (this.index == -1)
    {
      this.index = 3;
    }
  }

  imagePath(){
    return this.images[this.index].path;
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
