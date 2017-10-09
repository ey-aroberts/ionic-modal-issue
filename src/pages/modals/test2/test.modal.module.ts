import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestModal2 } from './test.modal';

@NgModule({
  declarations: [
    TestModal2
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonicPageModule.forChild(TestModal2)
  ],
  entryComponents: [
    TestModal2
  ]
})
export class TestModalModule { }
