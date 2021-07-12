import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';/* classe curso importada */

@Component({
  selector: 'app-course-list',/* tag */
  templateUrl: './course-list.component.html',/* arquivo html */
})

export class CourseListComponent implements OnInit {

  filteredCourses: Course[] = [];

  _courses: Course[] = []; //aqui eu declarei um array de cursos que ainda está vazio

  _filterBy: string;

  constructor(private courseService: CourseService){}

  ngOnInit(): void {
    this._courses = this.courseService.retriveAll();//aqui eu faço o array courses receber o retorno da chamada do método retriveAll que retorna um array de cursos
    this.filteredCourses = this._courses;
  }

  set filter(value: string){
    this._filterBy = value;

    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterBy;
  }

}
