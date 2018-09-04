import {IUser} from './interfaces/IUser';

export class User implements IUser{
    public email;
    public phone;
    public password;
    constructor() {
        this.email = 'demo@email.com';
        this.phone = '+375332223344';
        this.password = '1111';
    }
}