export class User {
  public userId: string = "";
  public fullName: string = "";
  public email: string = "";
  public userName: string = "";
  public roles: string[] = [];
  public dateCreated: Date;

  constructor(id: string, fullName: string, email: string, userName: string, roles: string[], dateCreated: Date) {
    this.userId = id;
    this.fullName = fullName;
    this.email = email;
    this.userName = userName;
    this.roles = roles;
    this.dateCreated = dateCreated;
  }
}
