import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestModal1 } from './test.modal';

@NgModule({
  declarations: [
    TestModal1
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonicPageModule.forChild(TestModal1)
  ],
  entryComponents: [
    TestModal1
  ]
})
export class TestModalModule { }
