import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Project } from './project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectList;
  constructor(private firebaseFirestore: AngularFirestore) { }

  ngOnInit() {
    this.firebaseFirestore.firestore
      .collection('projects')
      .get()
      .then(querySnapshot => {
        let results = [];
        querySnapshot.forEach(function(project) {
          let row = new Project();
          row.serialize(project.data());
          results.push(row);
        });
        this.projectList = results;
      });
  }
}
