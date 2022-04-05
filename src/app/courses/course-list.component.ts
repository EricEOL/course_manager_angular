import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html' 
})
export class CourseListComponent implements OnInit {

  _courses: Course[] = [];

  filteredCourses: Course[] = [];

  _filterby: string = "";

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this._courses = this.courseService.retrieveAll();
    this.filteredCourses = this._courses;
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