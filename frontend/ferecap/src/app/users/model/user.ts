import {Type} from '../../usertypes/model/type';

export class User {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  newPassword: string;
  userType: Type;
}
