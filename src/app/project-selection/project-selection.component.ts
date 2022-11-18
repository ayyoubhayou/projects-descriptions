import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectSelectionService } from '../services/project-selection.service';

@Component({
  selector: 'app-project-selection',
  templateUrl: './project-selection.component.html',
  styleUrls: ['./project-selection.component.scss']
})
export class ProjectSelectionComponent implements OnInit {

  constructor(
    private projectSelectionService: ProjectSelectionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.projectSelectionService.setSelectedProject(this.route.snapshot.paramMap.get('id')!)
  }

}
