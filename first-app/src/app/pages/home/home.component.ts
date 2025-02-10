import { Component } from '@angular/core';
import { Strings } from '../../enum/strings.enum';
import { CoursesComponent } from '../courses/courses.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CoursesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  courses: any[] = [];
   ngOnInit(){
      this.getCourses();
    }
  
   getCourses(){
    const data = localStorage.getItem(Strings.STORAGE_KEY);
    if (data) {
      this.courses = JSON.parse(data);
    }
  } 
}
