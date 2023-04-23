import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipes',
  templateUrl: './inbuilt-pipes.component.html',
  styleUrls: ['./inbuilt-pipes.component.css']
})
export class InbuiltPipesComponent implements OnInit {
  title = 'pankaja g mujumale';
  currency="125";
  percent=0.5595;
  date = new Date();
 
  
  dateExample=Date();
 

  pipes_of_object=
  {name:"pankaja",age:22,add:"pune"};  //object

  TodayDate=Date();

  mydat =[19,20,30,50];
  user ={
   "name":"joshant",
   "age":"20",
   "mobile":"7724773457"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
