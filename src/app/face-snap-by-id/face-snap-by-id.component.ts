import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap2 } from '../models/face-snap-2.model';
import { FaceSnapSevice } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap-by-id',
  templateUrl: './face-snap-by-id.component.html',
  styleUrls: ['./face-snap-by-id.component.css']
})
export class FaceSnapByIdComponent {
  faceSnapLocation!: FaceSnap2;
  id!: number;

  constructor(private faceSnapService: FaceSnapSevice,
              private avtivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.avtivatedRoute.snapshot.params['id'];
    this.faceSnapLocation= this.faceSnapService.getFaceSnapById(this.id);
  }


  onSnapLocation(id: number): void {
    this.faceSnapService.snapFaceSnapById(id);
  }
}
