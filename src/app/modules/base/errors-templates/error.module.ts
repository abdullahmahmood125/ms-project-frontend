import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {errorRoutes} from "./error.routing";
import {BasePipeModule} from "../../common/pipes/base.pipe.module";
import { InternalServerComponent } from './internal-server/internal-server.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(errorRoutes),
    BasePipeModule
  ],
  declarations: [InternalServerComponent],
  providers: [],
  exports: []
})

export class ErrorModule {
}
