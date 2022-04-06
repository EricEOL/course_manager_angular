import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  course: Course = {
    id: 0,
    name: '',
    releaseDate: '',
    description: '',
    duration: 0,
    code: '',
    rating: 0,
    price: 0,
    imageUrl: '',
  };

  constructor(private activateRoute: ActivatedRoute, private courseService: CourseService) {
  }

  ngOnInit(): void {
      this.course = this.courseService.retrieveById(Number(this.activateRoute.snapshot.paramMap.get("id")));
  }

  save(): void {
    this.courseService.save(this.course);
  }

}