import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {Type} from '../../../usertypes/model/type';
import {TypeService} from '../../../usertypes/service/type.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;
  userTypes: Type[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private userTypeService: TypeService) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.userTypeService.findAll().subscribe(data => {
      this.userTypes = data;
    });
  }

  onSubmit(): any {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList(): any {
    this.router.navigate(['/users']);
  }


}
