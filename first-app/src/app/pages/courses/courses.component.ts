import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
 @Input() courses: any;
 @Input() isAdmin = false;
 @Output() del = new EventEmitter();

 deleteCourse(course: any) {

    this.del.emit(course);
  }
}
