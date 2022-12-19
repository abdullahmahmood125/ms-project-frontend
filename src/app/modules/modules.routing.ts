import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from "./base/base.component";
import { HomeComponent } from "./base/home/home.component";
import { AppLayoutComponent } from "./base/app-layout/app-layout.component";
import { FullScreenLayoutComponent } from "./base/app-layout/full-screen-layout/full-screen-layout.component";


const routes: Routes = [
  {
    path: 'error',
    component: FullScreenLayoutComponent,
    loadChildren: () => import('./base/errors-templates/error.module').then(m => m.ErrorModule)
  }, {
    path: '',
    component: FullScreenLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }, {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'user',
        component: BaseComponent,
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      }, {
        path: 'ins',
        component: BaseComponent,
        loadChildren: () => import('./ins/ins.module').then(m => m.InsModule)
      }, {
        path: 'kyc',
        component: BaseComponent,
        loadChildren: () => import('./kyc/kyc.module').then(m => m.KycModule)
      }, {
        path: 'pv',
        component: BaseComponent,
        loadChildren: () => import('./pv/pv.module').then(m => m.PvModule)
      }, {
        path: '**',
        redirectTo: 'error/404'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class ModulesRouting {
}
