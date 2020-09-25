import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserListComponent} from './users/components/user-list/user-list.component';
import {UserFormComponent} from './users/components/user-form/user-form.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './users/service/user.service';
import {UserEditComponent} from './users/components/user-edit/user-edit.component';
import {MenuComponent} from './common/components/menu/menu.component';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {TypeListComponent} from './usertypes/components/type-list/type-list.component';
import {TypeFormComponent} from './usertypes/components/type-form/type-form.component';
import {TypeEditComponent} from './usertypes/components/type-edit/type-edit.component';
import {UsersComponent} from './usertypes/components/users/users.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {LoginComponent} from './users/components/login/login.component';
import {HttpInterceptorService} from './users/service/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    UserEditComponent,
    MenuComponent,
    TypeListComponent,
    TypeFormComponent,
    TypeEditComponent,
    UsersComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbCollapseModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
