export class Database {
  name: string;
  type: string;
  url: string;
  user: string;
  database: any;
  edit: boolean;

  Database(name: string, type: string, url: string, user: string, database: any) {
    this.name = name;
    this.type = type;
    this.url = url;
    this.user = user;
    this.database = database;
    this.edit = false;
  }

  serialize(row: object) {
    this.name = row['name'];
    this.type = row['type'];
    this.url = row['url'];
    this.user = row['user'];
    this.database = row['database'];
    this.edit = false;
  }
}
