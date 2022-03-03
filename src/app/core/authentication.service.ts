import {Injectable} from '@angular/core';
import {User} from "./models/user.interface";
import {Role} from "./models/role.enum";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly userStorageKey = 'User';
  private _user?: User  ;

  users: User[] = [
    {username: 'admin', password: '123?', role: Role.Admin},
    {username: 'user1', password: '456?', role: Role.Worker},
    {username: 'user2', password: '789?', role: Role.Worker},
  ]

  constructor() {
  }

  get user(): User {
    let user = this._user;
    if (!user) {
      const userStr = localStorage.getItem(this.userStorageKey);
        user = userStr ? JSON.parse(userStr) : undefined ;
    }
    return user as User ;
  }

  set user(user: User) {
    this._user = user;
    const userStr = JSON.stringify(user)
    localStorage.setItem(this.userStorageKey, userStr);
  }

  isUserAuthValid(username: string, password: string): boolean {
    const user = this.users.find(user =>
      user.username === username
      &&
      user.password === password)
    return !!user;
  }

  get userRole(): Role {
    return Role.Worker;
  }

  get isLogedin(): boolean {
    return !!(this._user);
  }

  logout() {
    this._user = undefined;
    localStorage.removeItem(this.userStorageKey);
  }
}
