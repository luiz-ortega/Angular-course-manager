import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html"
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: "Angular: Froms",
        imageUrl: "",
        price: 99.99,
        code: "XPS-8796",
        duration: 120,
        rating: 5.4,
        releaseDate: "December, 2, 2019"
      },
      {
        id: 2,
        name: "Angular: HTTP",
        imageUrl: "",
        price: 49.99,
        code: "XPS-2756",
        duration: 120,
        rating: 3.5,
        releaseDate: "December, 2, 2019"
      }
    ];
  }
}
