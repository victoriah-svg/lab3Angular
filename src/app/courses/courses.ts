import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  courses: string[] = ["Webbutveckling", "Introduktion till programmering i JavaScript", "Webbanvändbarhet",
    "Grafisk teknik för webb", "Frontend-baserad webbutveckling", "Datateknik - Databaser", "Backend-baserad webbutveckling",
    "Programmering i TypeScript"];
}
