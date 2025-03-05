import { UserType } from './UserType';

export class User {
  readonly id: string = crypto.randomUUID();

  constructor(
    readonly name: string | null = null,
    readonly username: string | null = null,
    readonly type: UserType | null = null,
    readonly password: string | null = null
  ) {}
}
