export class Generator {
  name: string;
  database: string;
  schema: string;
  edit: boolean;

  Generator(name: string, database: string, schema: string, edit: boolean) {
    this.name = name;
    this.database = database;
    this.schema = schema;
    this.edit = edit;
  }

  serialize(row: object, schema: object, database: object) {
    this.name = row['name'];
    this.database = database['name'];
    this.schema = schema['name'];
    this.edit = false;
  }
}
