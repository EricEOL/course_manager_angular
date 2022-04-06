import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  _courses: Course[] = [];

  filteredCourses: Course[] = [];

  _filterby: string = "";

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: err => console.log('Error', err)
    });
  }

  deleteById(id: number): void {
    this.courseService.deleteById(id).subscribe({
      next: () => {
        console.log('Removed with success');
        this.retrieveAll();
      },
      error: err => console.log('Error', err)
    });
  }

  set filter(value: string) {
    this._filterby = value;

    this.filteredCourses = this._courses.filter(course => {
      let fullInformations: string = course.name + course.price + course.code + course.releaseDate;
      return fullInformations.toLowerCase().indexOf(this._filterby.toLowerCase()) > -1
    });
  }

  get filter() {
    return this._filterby;
  }

}