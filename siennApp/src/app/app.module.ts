import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {ShellComponent} from './core/shell/shell.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {TopMenuComponent} from './core/top-menu/top-menu.component';
import {StoreModule} from '@ngrx/store';
import {appReducer, initialState} from './store/state';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {Effects} from './effects/effects';
import {AuthGuard} from './guards/auth.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatToolbarModule, MatInputModule} from '@angular/material';
import {PageProductsComponent} from './components/page-list/page-products.component';
import {environment} from '../environments/environment';
import {AuthService} from './core/auth.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './core/token.interceptor';
import {ProductsService} from './core/products.service';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {ProductComponent} from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    LoginComponent,
    HomeComponent,
    TopMenuComponent,
    PageProductsComponent,
    ProductsListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([Effects]),
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    StoreModule.forRoot(appReducer),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : []
  ],
  providers: [AuthGuard, AuthService, ProductsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
