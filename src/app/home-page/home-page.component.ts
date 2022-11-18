import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, switchMap, takeUntil, tap, timer } from 'rxjs';
import { SelectedProject } from '../model/selected-project.model';
import { ProjectSelectionService } from '../services/project-selection.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  public selectedProjectId$ = new Subject<string | null>()
  private startCounter$ = new Subject<void>()
  private destroyed$ = new Subject<void>()

  constructor(
    private projectSelectionService: ProjectSelectionService) {
  }

  ngOnInit(): void {
    this.initProjectDisplayMechanism()
    this.handleAutoRedirectionToStaticDisplay()
  }

  ngOnDestroy(): void {
    this.destroyed$.next()
    this.destroyed$.complete()
  }
  
  private initProjectDisplayMechanism() {
    this.projectSelectionService.getSelectedProject()
      .pipe(
        takeUntil(this.destroyed$),
        tap(() => this.startCounter$.next())
      ).subscribe((selectedProject: SelectedProject) => this.selectedProjectId$.next(selectedProject.id))
  }

  private handleAutoRedirectionToStaticDisplay() {
    this.startCounter$.pipe(
      switchMap(() => timer(5000)), // When a new project is selected, wait this amount of time before redirecting to static content
      tap(() => this.selectedProjectId$.next(null)),
      takeUntil(this.destroyed$)
    ).subscribe()
  }
}
