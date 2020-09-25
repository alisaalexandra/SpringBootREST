import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {Type} from '../../../usertypes/model/type';
import {TypeService} from '../../../usertypes/service/type.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
  id: number;
  userTypes: Type[];
  confirmPassword: '';
  matched = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private userTypeService: TypeService) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.user = new User();
    this.id = this.route.snapshot.params.id;
    this.userService.getById(this.id).subscribe(data => {
      this.user = data;
      this.userTypeService.findAll().subscribe(data1 => {
        this.userTypes = data1;
        this.userTypes.forEach(ust => {
          if (ust.id === this.user.userType.id) {
            this.user.userType = ust;
          }
        });
      });
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.userService.update(this.user).subscribe(result => this.gotoUserList());
  }

  // tslint:disable-next-line:typedef
  gotoUserList() {
    this.router.navigate(['/users']);
  }

  // tslint:disable-next-line:typedef
  matchPasswords() {
    if (this.user.newPassword === '' || this.user.newPassword === this.confirmPassword) {
      this.matched = true;
    } else {
      this.matched = false;
    }
  }

}
