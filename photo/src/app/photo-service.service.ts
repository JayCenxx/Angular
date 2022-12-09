// photo-service.service.ts
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

interface Iunsplash{
  urls:{
  regular:string;
  }
}

@Injectable({
  providedIn: 'root'

})
export class PhotoServiceService {

  constructor(private http: HttpClient) { }

getPhoto(){
  return this.http.get<Iunsplash>('https://api.unsplash.com/photos/random',{
    headers:{
      Authorization: 'Client-ID PAbaTGbHyajKhHBgo9YvWmgi8hBI4GllIp6BCy6GCkE'
    }
  })
}

}
