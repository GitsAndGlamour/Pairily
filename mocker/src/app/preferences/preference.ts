export class Preference {
  name: string;
  value: string;
  edit: boolean;

  constructor () {
    this.name = null;
    this.value = null;
    this.edit = false;
  }

  serialize(row: object) {
    this.name = row['name'];
    this.value = row['value'];
    this.edit = false;
  }
}
