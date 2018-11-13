export class Person {
  id: number;
  first: string;
  last: string;
  email: string;
  gender: string;
  username: string;
  role: string;
  selected?: boolean;

  constructor(input: object) {
    this.id = Number.parseInt(input['id']);
    this.first = input['first'];
    this.last = input['last'];
    this.email = input['email'];
    this.gender = input['gender'];
    this.username = input['username'];
    this.role = input['role'];
    this.selected = false;
  }
}

export class Story {
  id: number;
  title: string;
  points: number;
  selected?: boolean;

  constructor(input: object) {
    this.id = Number.parseInt(input['id']);
    this.title = input['title'];
    this.points = Number.parseInt(input['points']);
    this.selected = false;
  }

}
