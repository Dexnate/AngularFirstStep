import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  infos:{nom:string,email:string, tel:number};
  comments=[];
  commentaire={date:null, message:""};


  //Injection du service dans le constructeur du composant
  constructor(private aboutService:AboutService) {
    this.infos = this.aboutService.getInfo(); //Appel à la méthode de about.service
    this.comments = this.aboutService.getAllComments(); // Appel à la méthode de about.service
  }

  ngOnInit() {
  }

  onAddCommentaire(c){
    this.aboutService.addComment(c); //Appel à la méthode de about.service
    this.commentaire.message="";
    this.comments = this.aboutService.getAllComments();
  }

}
