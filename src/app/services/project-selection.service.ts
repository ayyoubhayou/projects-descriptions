import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import * as firebase from 'firebase/app';
import { tap, map, switchMap, first } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import * as moment from 'moment'
import { SelectedProject } from '../model/selected-project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectSelectionService {

  constructor(private db: AngularFireDatabase) { }

  getSelectedProject(): Observable<any> {
    return this.db.object(`projects/selected`).valueChanges();
  }

  setSelectedProject(id: string) {
    this.db.object('projects/selected').set({id, updatedOn: moment().unix()} as SelectedProject)
  }
}
