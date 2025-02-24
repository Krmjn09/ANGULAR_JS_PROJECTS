import { Injectable } from '@angular/core';
import { Strings } from '../../enum/strings.enum';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

 getCourses() {
  const data = localStorage.getItem(Strings.STORAGE_KEY);
  if (data) {
    const courses = JSON.parse(data);
  }
}
}
