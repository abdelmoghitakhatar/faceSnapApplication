import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap2 } from '../models/face-snap-2.model';
import { FaceSnapSevice } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})
export class FaceSnapComponent implements OnInit {

  @Input("snapLocation")
  faceSnapLocation!: FaceSnap2;

  constructor(private faceSnapService: FaceSnapSevice, private router: Router) { }

  ngOnInit(): void {
  }

  onSnapLocation(id: number): void {
    this.faceSnapService.snapFaceSnapById(id);
  }

  onClick1(id: number): void{
    this.router.navigateByUrl('home/'+id);
  }

  onClick2(id: number): void{
    this.router.navigateByUrl(`home/${id}`);
  }

  onClick3(id: number): void{
    this.router.navigate(['home', id]);
  }
}
