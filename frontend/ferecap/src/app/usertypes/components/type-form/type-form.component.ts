import {Component, OnInit} from '@angular/core';
import {Type} from '../../model/type';
import {ActivatedRoute, Router} from '@angular/router';
import {TypeService} from '../../service/type.service';

@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.css']
})
export class TypeFormComponent implements OnInit {
  type: Type;
  id: number;

  constructor(private userTypeService: TypeService, private route: ActivatedRoute,
              private router: Router) {
    this.type = new Type();
  }


  // tslint:disable-next-line:typedef
  onSubmit() {
    this.userTypeService.save(this.type).subscribe(result => this.goToUserTypeList());
  }

  goToUserTypeList(): any {
    this.router.navigate(['/usertypes']);
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  ngOnInit(): void {
    this.type = new Type();
    this.id = this.route.snapshot.params.id;
    this.userTypeService.getById(this.id).subscribe(data => {
      this.type = data;
    });
  }
}
