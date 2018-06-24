import { UserInfo } from '../models/userInfo';

export class AuthResponse {
    Type : number;
    TypeResponse : number;
    Message : string;
    Errors : string;
    DataResult : UserInfo;

}

