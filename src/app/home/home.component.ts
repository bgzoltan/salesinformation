import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute) { }

  // DATA PASS FROM PARENT COMPONENT 
  ngOnInit(): void {
    console.log(history?.state.data || "Hello")
  }

}


