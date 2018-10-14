export class Schema {
  name: string;
  project: string;
  contents: any;
  edit: boolean;

  Schema(name: string, project: string, contents: any) {
    this.name = name;
    this.project = project;
    this.contents = contents;
    this.edit = false;
  }

  serialize(row: object, project: object) {
    this.name = row['name'];
    this.project = project['name'];
    this.contents = row['contents'];
    this.edit = false;
  }
}
