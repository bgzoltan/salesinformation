import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
 
 

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

 
  @Input() selectedTeam: any;
  @Input() filteredProjects: any;
  public numOfProjects:number=0;


  constructor() { }
  console = console;
  ngOnInit(): void {

   
  }

}
