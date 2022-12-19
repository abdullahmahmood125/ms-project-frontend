export class UserModel {
  private readonly id: number;
  private firstName: string;
  private lastName: string;
  private readonly email: string;
  private phone: string;
  private cellNo: string;
  private address: string;
  private city: string;
  private state: string;
  private zip: string;
  private readonly password: string;
  private readonly role: string;
  private readonly media: {};
  private readonly permissions: any[];
  public readonly roleId: number;

  constructor(user) {
    if (user) {
      this.id = user.id;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.media = user.media;
      this.email = user.email;
      this.phone = user.phone;
      this.cellNo = user.cellNo;
      this.address = user.address;
      this.city = user.city;
      this.state = user.state;
      this.zip = user.zip;
      this.password = user.password;
      this.role = user.role;
      this.permissions = user.permissions;
      this.roleId = user.roleId;
    }
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
  getMedia() {
    return this.media;
  }

  getPassword() {
    return this.password;
  }

  getRole() {
    return this.role;
  }

  getPermissions() {
    return this.permissions;
  }

}
