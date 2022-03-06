import {Injectable} from '@angular/core';
import {User} from "../models/user.interface";
import {Role} from "../models/role.enum";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly userStorageKey = 'User';
  private _user?: User;

  users: User[] = [
    {id: '0', username: 'admin', password: '123?', role: Role.Admin},
    {id: '1', username: 'userx', password: '456?', role: Role.Worker},
    {id: '2', username: 'usery', password: '789?', role: Role.Worker},
  ]

  constructor() {
    this._user = this.user;
  }

  get user(): User {
    let user = this._user;
    if (!user) {
      const userStr = localStorage.getItem(this.userStorageKey);
      user = userStr ? JSON.parse(userStr) : undefined;
    }
    return user as User;
  }

  set user(user: User) {
    this._user = user;
    const userStr = JSON.stringify(user)
    localStorage.setItem(this.userStorageKey, userStr);
  }

  validateUser(username: string, password: string): User | undefined {
    return this.users.find(user =>
      user.username === username
      &&
      user.password === password)

  }

  get userRole(): Role | undefined {
    return this._user?.role;
  }

  get userId(): string {
    return this._user?.id ?? '';
  }

  get isLoggedIn(): boolean {
    return !!(this._user);
  }

  get isWorker() {
    return this._user?.role === Role.Worker;
  }

  get isAdmin() {
    return this._user?.role === Role.Admin;
  }

  signOut() {
    this._user = undefined;
    localStorage.removeItem(this.userStorageKey);
  }
}
