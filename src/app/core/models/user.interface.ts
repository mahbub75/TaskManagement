import {Role} from "./role.enum";

export interface User {
  username: string;
  password: string;
  role: Role;
}
