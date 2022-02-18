import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../data.entity';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  team!: Team;
  @Input()
 index!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
