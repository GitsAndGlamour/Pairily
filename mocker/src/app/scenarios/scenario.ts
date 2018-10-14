export class Scenario {
  name: string;
  description: string;
  project: string;
  contents: any;
  edit: boolean;

  Scenario(name: string, description: string, project: string, contents: any) {
    this.name = name;
    this.description = description;
    this.project = project;
    this.contents = contents;
    this.edit = false;
  }

  serialize(row: object, project: object) {
    this.name = row['name'];
    this.description = row['description'];
    this.project = project['name'];
    this.contents = row['contents'];
    this.edit = false;
  }
}
