import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ShellComponent } from './core/shell/shell.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TopMenuComponent } from './core/top-menu/top-menu.component';
import {StoreModule} from '@ngrx/store';
import {appReducer} from './store/state';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AuthGuard} from "./guards/auth.guard";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatButtonModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    LoginComponent,
    HomeComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    StoreModule.provideStore(appReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 10
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
