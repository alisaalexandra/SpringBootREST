import {Component, OnInit} from '@angular/core';
import {User} from '../../../users/model/user';
import {Type} from '../../model/type';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../users/service/user.service';
import {TypeService} from '../../service/type.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  id: number;
  userType: Type;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private userTypeService: TypeService) {
  }
  // tslint:disable-next-line:typedef
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.userTypeService.getById(this.id).subscribe(data1 => {
      this.userType = data1;
      this.users = this.userType.userList;
    });
  }

  // tslint:disable-next-line:typedef
  public goToUserTypeList() {
    this.router.navigate(['usertypes']);
  }
}
