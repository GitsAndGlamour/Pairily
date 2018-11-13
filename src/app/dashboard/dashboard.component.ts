import { Component, OnInit } from '@angular/core';
import {Person, Story} from "../classes/entities";
import {PEOPLE_DATA, STORY_DATA} from "../data";

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  people: Person[] = [];
  peopleSelected: Person[] = [];
  stories: Story[] = [];
  storiesSelected: Story[] = [];
  stepper = 1;
  constructor() { }

  ngOnInit(): void {
    PEOPLE_DATA.forEach(person => {this.people.push(new Person(person))});
    STORY_DATA.forEach(story => {this.stories.push(new Story(story))});
  }
x
  checkIfPeopleAreSelected() {
    this.peopleSelected = [];
    this.people.filter(person => {return person.selected}).map(person => {this.peopleSelected.push(person)});
    console.log(this.peopleSelected)
  }

  checkIfStoriesAreSelected() {
    this.storiesSelected = [];
    this.stories.filter(story => {return story.selected}).map(story => {this.storiesSelected.push(story)});
    console.log(this.storiesSelected)
  }
}
