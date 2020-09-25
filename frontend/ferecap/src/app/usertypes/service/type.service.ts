import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Type} from '../model/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private usertypesUrl: string;

  constructor(private http: HttpClient) {
    this.usertypesUrl = 'http://localhost:8080/usertypes';
  }

  public findAll(): Observable<Type[]> {
    return this.http.get<Type[]>(this.usertypesUrl);
  }

  public save(type: Type): any {
    return this.http.post<Type>(this.usertypesUrl, type);
  }

  // tslint:disable-next-line:typedef
  public delete(id: number) {
    return this.http.delete(`${this.usertypesUrl}/${id}`);
  }

  // tslint:disable-next-line:typedef
  public update(type: Type) {
    return this.http.put<Type>(this.usertypesUrl, type);
  }

  public getById(id: number): Observable<any> {
    return this.http.get(`${this.usertypesUrl}/${id}`);
  }
}
