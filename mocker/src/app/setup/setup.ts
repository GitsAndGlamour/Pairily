export class Setup {
  title: string;
  icon: string;
  list: Secret[];

  constructor (title: string, icon: string, list: Secret[]) {
    this.title = title;
    this.icon = icon;
    this.list = list;
  }
}
export class Secret {
  name: string;
  key: string;
  value: string;
  edit: boolean;

  constructor () {
    this.name = null;
    this.key = null;
    this.value = null;
    this.edit = false;
  }

  serialize(row: object) {
    this.name = row['name'];
    this.key = row['key'];
    this.value = row['value'];
    this.edit = false;
  }
}
