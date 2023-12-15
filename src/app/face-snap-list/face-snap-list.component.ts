import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap2 } from '../models/face-snap-2.model';
import { FaceSnapSevice } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.css']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap2[];

  constructor( private faceSnapService: FaceSnapSevice, private router: Router ){}

  ngOnInit(): void {

    this.faceSnaps = this.faceSnapService.getAllFaceSnaps();
  }

}
