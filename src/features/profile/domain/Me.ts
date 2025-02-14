export class Me {
  constructor(
    id: string,
    name: string,
    dni: string,
    birthday: string,
    address: string,
    avatar: string
  ) {
    this.id = id;
    this.name = name;
    this.dni = dni;
    this.birthday = birthday;
    this.address = address;
    this.avatar = avatar;
  }

  readonly id: string;
  readonly name: string;
  readonly dni: string;
  readonly birthday: string;
  readonly address: string;
  readonly avatar: string;
}
