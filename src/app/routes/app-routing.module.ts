import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapByIdComponent } from "../face-snap-by-id/face-snap-by-id.component";
import { FaceSnapListComponent } from "../face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "../landing-page/landing-page.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";

const routes: Routes= [
    {path: 'home', component: FaceSnapListComponent},
    {path: 'home/:id', component: FaceSnapByIdComponent},
    {path: '', component: LandingPageComponent},
    {path:'**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class appRoutingModule {}