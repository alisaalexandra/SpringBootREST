import {Component, OnInit} from '@angular/core';
import {Type} from '../../model/type';
import {ActivatedRoute, Router} from '@angular/router';
import {TypeService} from '../../service/type.service';

@Component({
  selector: 'app-type-edit',
  templateUrl: './type-edit.component.html',
  styleUrls: ['./type-edit.component.css']
})
export class TypeEditComponent implements OnInit {
  type: Type;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userTypeService: TypeService) {
    this.type = new Type();
  }

  ngOnInit(): void {
    this.type = new Type();
    this.id = this.route.snapshot.params.id;
    this.userTypeService.getById(this.id).subscribe(data => {
      this.type = data;
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.userTypeService.update(this.type).subscribe(result => this.gotoUserList())
}

  // tslint:disable-next-line:typedef
  gotoUserList() {
    this.router.navigate(['/usertypes']);
  }
}
