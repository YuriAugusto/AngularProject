import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from './course.service';

@Component({
  templateUrl:'./course-info.component.html'
})

export class CourseInfoComponent implements OnInit{

  course: Course;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {}//aqui eu faço a injeção de dependência

  ngOnInit():void{
    this.course = this.courseService.retriveById(+this.activatedRoute.snapshot.paramMap.get('id'));//o retorno é uma string e o símbolo de '+' serve para converter a string em number
  }
  save(): void{
    this.courseService.save(this.course);
  }
}
