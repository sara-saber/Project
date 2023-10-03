import { ResourceModel } from 'src/app/modules/shared/models/generic-model';
import { Address } from './address';
export interface User {
    image: string
    name: string
    surname: string
    email: string
    address: Address
    userName: string
    password: string
}

export class User extends ResourceModel<User> implements User {
    userName: string
    password: string
    constructor(user?: Partial<User>) {
        super(user);
        this.userName = user ?.email || 'null'
        this.password = user?.name + '_*2023' || ''
    }


}