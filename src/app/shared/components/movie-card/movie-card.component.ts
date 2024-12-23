import { Component, OnInit } from '@angular/core';
import { Imovies } from '../models/movie';
import { movieArray } from '../consts/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  movieArray:Array<Imovies>=movieArray
}
