import {Component, OnInit} from '@angular/core';
import {Type} from '../../model/type';
import {HttpClient} from '@angular/common/http';
import {TypeService} from '../../service/type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {
  types: Type[];
  closeResult = '';

  constructor(private typeService: TypeService, private route: ActivatedRoute,
              private router: Router,  private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getUserTypes();
  }

  // tslint:disable-next-line:typedef
  public getUserTypes() {
    this.typeService.findAll().subscribe(data => {
      this.types = data;
    });
  }

  // tslint:disable-next-line:typedef
  deleteUserType(id: number) {
    this.typeService.delete(id).subscribe(data => {
      this.getUserTypes();
    });
  }

  // tslint:disable-next-line:typedef
  editUserType(id: number) {
    this.router.navigate(['editusertype', id]);
  }

  // tslint:disable-next-line:typedef
  addUserType() {
    this.router.navigate(['addusertype']);
  }

  // tslint:disable-next-line:typedef
  viewUsers(id: number) {
    this.router.navigate(['usertypeusers',id]);
  }
  // tslint:disable-next-line:typedef
  open(content, id) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.deleteUserType(id);
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
