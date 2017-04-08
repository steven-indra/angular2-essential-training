import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { PopupComponent } from './popup.component';
import { ImageSwitcherComponent } from './image-switcher.component';
import { LargerDirective } from './larger.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    PopupComponent,
    LargerDirective,
    ImageSwitcherComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}