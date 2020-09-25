import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  closeResult = '';
  searchValue = '';
  p = 1;
  numberOfItemsperP = 5;

  constructor(private userService: UserService, private route: ActivatedRoute,
              private router: Router, private modalService: NgbModal) {

  }

  ngOnInit(): any {
    this.getUsers();
  }

  // tslint:disable-next-line:typedef
  public getUsers() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  // tslint:disable-next-line:typedef
  deleteUser(id: number) {
    this.userService.delete(id).subscribe(data => {
      this.getUsers();
    });
  }

  // tslint:disable-next-line:typedef
  editUser(id: number) {
    this.router.navigate(['edituser', id]);
  }

  // tslint:disable-next-line:typedef
  addUser() {
    this.router.navigate(['adduser']);
  }

  // tslint:disable-next-line:typedef
  open(content, id) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.deleteUser(id);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
