// photo-show.compo.ts
import { Component } from '@angular/core';
import { PhotoServiceService } from '../photo-service.service';



@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.scss']
})
export class PhotoShowComponent {
photoUrl:string | undefined;

constructor(private photoService: PhotoServiceService){
  this.fetchPhoto()
}

onClick(){
  this.fetchPhoto()
}

fetchPhoto(){
  this.photoService.getPhoto().subscribe(response=>{
    this.photoUrl=response.urls.regular;
  })
}

}
