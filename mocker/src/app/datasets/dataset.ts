export class Dataset {
  name: string;
  project: string;
  contents: string;
  edit: boolean;

  Dataset(name: string, project: string, contents: string) {
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
