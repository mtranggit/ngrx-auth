import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import { User } from '../models/user';

export const MOCK_USER: User = {
  _id      : '1',
  email    : 'foo@test.com',
  firstName: 'Foo',
  lastName : 'Bar',
  password : 'password'
};

@Injectable()
export class UserService {
  private _authenticated = false;

  constructor() { }

  public authenticate(email: string, password: string): Observable<User> {
    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      this._authenticated = true;
      return Observable.of(MOCK_USER);
    }
  }

  public authenticated(): Observable<boolean> {
    return Observable.of(this._authenticated);
  }

  public authenticatedUser(): Observable<User> {
    return Observable.of(MOCK_USER);
  }

  public createImageBitmap(user: User): Observable<User> {
    this._authenticated = true;
    return Observable.of(user);
  }

  public signout(): Observable<boolean> {
    this._authenticated = false;
    return Observable.of(true);
  }

}
