import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Team, teams } from './data.entity';
import { allprojects, Project } from './projects.entity';

@Component({
  selector: 'app-link1',
  templateUrl: './link1.component.html',
  styleUrls: ['./link1.component.scss'],
})
export class Link1Component implements OnInit {
  teamAll: Team[] = teams;
  isDetails = false;
  selectedTeam!: Team;
  allProjects: Project[] = allprojects;
  filteredProjects: Project[] = [];
  teamTotalValue: number = 0;
  filter = 'All';
  filterType = 'period';
  periodFilter!: FormGroup;
 
  salesFilter!: FormGroup;
 

  periods = [
    { name: 'All' },
    { name: 'Q1' },
    { name: 'Q2' },
    { name: 'Q3' },
    { name: 'Q4' },
  ];

  saleses = [
    { name: 'All' },
    { name: 'Bagdány Zoli' },
    { name: 'Tóth Péter' },
    { name: 'Kovács Zoltán' },
    { name: 'Dóri Zoltán' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.periodFilter = this.fb.group({
      period: [null],
    });
    this.salesFilter = this.fb.group({
      sales: [null],
    });
  }
  console = console;

  submitPeriod() {
    this.filter = this.periodFilter.value.period;
    this.filterType = 'period';
  }

  submitSales() {
    this.filter = this.salesFilter.value.sales;
    this.filterType = 'sales';
  }

  // Return the filtered projects
  public get selectedProjects(): Project[] {
    let filteredProjects:Project[] = [];
    switch (this.filterType) {
      case 'period':
        filteredProjects= this.filter != 'All' ?
        this.allProjects.filter(
            (obj) => obj.period === this.filter
          ) : this.allProjects
       break;
      case 'sales':
       filteredProjects= this.filter != 'All' ?
        this.allProjects.filter(
            (obj) => obj.sales === this.filter
          ) : this.allProjects
        break;
    }
   return filteredProjects;
  }

  // Return the total value of the filtered projects
  public get totalProjects() {
    let total=0;
    // For non-fltered projects
    if (this.filter==="All") {
      return this.allProjects
      .map((project) => project.valueNet)
      .reduce((prevValue, currValue) => prevValue + currValue, 0);
    }

    // Depending on the filterType the projects are filtered
    switch (this.filterType) {
      case 'period':
        total=this.allProjects
          .filter((obj) => obj.period === this.filter)
          .map((project) => project.valueNet)
          .reduce((prevValue, currValue) => prevValue + currValue, 0)

        break;
      case 'sales':

          total=this.allProjects
          .filter((obj) => obj.sales === this.filter)
          .map((project) => project.valueNet)
          .reduce((prevValue, currValue) => prevValue + currValue, 0);
        break;
    }
   return total;
  }
}
 

