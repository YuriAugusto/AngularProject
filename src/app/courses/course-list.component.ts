import { Component, OnInit } from '@angular/core';
import { Course } from './course';/* classe curso importada */

@Component({
  selector: 'app-course-list',/* tag */
  templateUrl: './course-list.component.html',/* arquivo html */
})
export class CourseListComponent implements OnInit {
  courses: Course[] = []; //aqui eu declarei um array de cursos que ainda está vazio

  ngOnInit(): void {
    //método que será invocado assim que o componente for criado
    this.courses = [//atribui dois elementos ao array do atributo "courses: Course[] = [];"
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 4.5,
        releaseDate:"November, 2 , 2019"
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: '',
        price: 45.99,
        code: 'LKL-1094',
        duration: 80,
        rating: 4,
        releaseDate:"November, 4 , 2019"
      }
    ];
  }

}
