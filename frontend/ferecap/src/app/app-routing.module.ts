import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserListComponent} from './users/components/user-list/user-list.component';
import {UserFormComponent} from './users/components/user-form/user-form.component';
import {UserEditComponent} from './users/components/user-edit/user-edit.component';
import {TypeListComponent} from './usertypes/components/type-list/type-list.component';
import {TypeFormComponent} from './usertypes/components/type-form/type-form.component';
import {TypeEditComponent} from './usertypes/components/type-edit/type-edit.component';
import {UsersComponent} from './usertypes/components/users/users.component';
import {LoginComponent} from './users/components/login/login.component';
import {AuthGuardService} from './users/service/auth-guard.service';

// tslint:disable-next-line:one-variable-per-declaration
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'users', component: UserListComponent, canActivate: [AuthGuardService]},
  {path: 'adduser', component: UserFormComponent, canActivate: [AuthGuardService]},
  {path: 'edituser/:id', component: UserEditComponent, canActivate: [AuthGuardService]},
  {path: 'usertypes', component: TypeListComponent, canActivate: [AuthGuardService]},
  {path: 'usertypeusers/:id', component: UsersComponent, canActivate: [AuthGuardService]},
  {path: 'addusertype', component: TypeFormComponent, canActivate: [AuthGuardService]},
  {path: 'editusertype/:id', component: TypeEditComponent, canActivate: [AuthGuardService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
