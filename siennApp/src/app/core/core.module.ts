import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShellComponent} from './shell/shell.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {RouterModule} from '@angular/router';
import {RestService} from './rest.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [RestService],
  declarations: [ShellComponent, TopMenuComponent]
})
export class CoreModule {
}
