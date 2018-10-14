export class Project {
  name: string;
  edit: boolean;

  Project(name: string, user: string) {
    this.name = name;
    this.edit = false;
  }

  serialize(row: object) {
    this.name = row['name'];
    this.edit = false;
  }
}
