import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html' 
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit(): void {
      this.courses = [
        {
          id: 1,
          name: "Angular Forms",
          imageUrl: "",
          price: 99.99,
          code: "SSSD-3383",
          duration: 45,
          rating: 4.5,
          releaseDate: '10/10/2021'
        },
        {
          id: 2,
          name: "Angular HTTP",
          imageUrl: "",
          price: 104.99,
          code: "SXSD-12332",
          duration: 45,
          rating: 4.8,
          releaseDate: '11/12/22'
        }
      ]
  }

}