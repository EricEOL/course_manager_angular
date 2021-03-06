import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { StarModule } from "../shared/component/star/star.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { PipeModule } from "../shared/pipe/app-pipe.module";

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    StarModule,
    PipeModule,
    RouterModule.forChild([
      {
        path: 'courses',
        component: CourseListComponent
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent,
        
      }
    ])
  ]
})
export class CourseModule {}