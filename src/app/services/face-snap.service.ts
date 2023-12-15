import { Injectable } from "@angular/core";
import { FaceSnap2 } from "../models/face-snap-2.model";

@Injectable({ providedIn: 'root' })
export class FaceSnapSevice {
  faceSnap: FaceSnap2[] = [
    {
      id: 1,
      title: "This is a title 0",
      description: "This is a description 0",
      imageUrl: "/assets/abdelmoghit.jpeg",
      snaps: 73,
      snapStatus: false,
      location: "maroc",
      createdDate: new Date()
    },
    {
      id: 2,
      title: "This is a title 1",
      description: "This is a description 1",
      imageUrl: "/assets/image.png",
      snaps: 22,
      snapStatus: false,
      location: "palestine",
      createdDate: new Date()
    },
    {
      id: 3,
      title: "This is a title 2",
      description: "This is a description 2",
      imageUrl: "/assets/AKHATAR.png",
      snaps: 38,
      snapStatus: false,
      createdDate: new Date()
    }
  ];

  getAllFaceSnaps(): FaceSnap2[] {
    return this.faceSnap;
  }

  getFaceSnapById(id: number): FaceSnap2 {
    let facesnap = this.faceSnap.find(fSnap => fSnap.id === id);
    if (facesnap)
      return facesnap;
    else
      throw Error('faceSnap not found!');
  }

  snapFaceSnapById(id: number): void {
    let faceSnap = this.getFaceSnapById(id);
    faceSnap.snapStatus ? faceSnap.snaps-- : faceSnap.snaps++;
    faceSnap.snapStatus = !faceSnap.snapStatus;
  }

  isAuthored(id: number): boolean {
    let ids: number[] = this.faceSnap.map(item => item.id);
    if (id in ids)
      return true;
    else
      return false;
  }
}