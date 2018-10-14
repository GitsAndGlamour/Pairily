export class Api {
  name: string;
  route: string;
  response: string;
  schema: string;
  contents: any;
  edit: boolean;

  Api(name: string, route: string, response: string, schema: string, contents: any) {
    this.name = name;
    this.route = route;
    this.response = response;
    this.schema = schema;
    this.contents = contents;
    this.edit = false;
  }

  serialize(row: object, schema: object) {
    this.name = row['name'];
    this.route = row['route'];
    this.response = row['response'];
    this.schema = schema['name'];
    this.contents = row['contents'];
    this.edit = false;
  }
}
