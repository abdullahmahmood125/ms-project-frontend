import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LabelTranslationPipe} from "./label.translation.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LabelTranslationPipe],
  exports: [LabelTranslationPipe],
  providers: [LabelTranslationPipe]
})
export class BasePipeModule {
}
