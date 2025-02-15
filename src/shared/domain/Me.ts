export class Me {
  constructor(
    id: string,
    name: string,
    email: string,
    dni?: string,
    birthday?: string,
    address?: string,
    avatar?: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.dni = dni;
    this.birthday = birthday;
    this.address = address;
    this.avatar = avatar;
  }

  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly dni?: string;
  readonly birthday?: string;
  readonly address?: string;
  readonly avatar?: string;
}
