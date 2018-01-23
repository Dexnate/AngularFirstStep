import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";
import {GalleryService} from '../../services/gallery.service'; //bibliothèque qui permet du reactive programming (programmation réactive)


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  pagePhotos:any;
  currentPage:number = 1;
  size:number = 5;
  page:Array<number> = [];
  totalPages:number;
  motCle:string ="";

  //Injection du service http par defaut dans angular
  constructor(private galleryService:GalleryService) {

  }

  ngOnInit() {
  }

  onSearch(dataForm){
    //Méthode search du service retourne un objet de type observable, le composant va donc subscribepour l'utiliser
   this.galleryService.Search(dataForm.motCle, this.size, this.currentPage)
    //la réponse Json est sous format Observable, il faut transmettre donc l'information au composant
      .subscribe(data=>{
        //pagePhotos est un objet comprennant toutes les informations data du fichier json

        this.pagePhotos = data;

        //Calculer le nombre total de pages et si c'est un nombre à virgule rajouter 1 page
        this.totalPages=data.totalHits/this.size;
        if(data.totalHits % this.size !=0){
          ++this.totalPages
        }
        this.page=new Array(this.totalPages);

      }, err=>{
        console.log(err);
    })
  }

  goToPage(i){
    //Pour que les pages commencent à 1 et pas 0
    this.currentPage = i+1;
    this.onSearch({motCle:this.motCle})
  }

}
