import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditWordsPage } from './edit-words';

@NgModule({
  declarations: [
    EditWordsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditWordsPage),
  ],
})
export class EditWordsPageModule {}
