import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShellComponent} from './shell/shell.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  declarations: [ShellComponent, TopMenuComponent]
})
export class CoreModule {
}
