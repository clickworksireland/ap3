import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import {DynamicComponentModule} from 'angular2-dynamic-component/index';
import { CustomPage } from './custom-page';
import { LongerTitlesModule } from "../../pipes/longer-titles/longer-titles.module";

@NgModule({
  declarations: [
    CustomPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomPage),
    TranslateModule.forChild(),
    LongerTitlesModule,
    DynamicComponentModule
  ],
  entryComponents: [
    CustomPage
  ],
  exports: [
    CustomPage
  ]
})
export class CustomPageModule {}
