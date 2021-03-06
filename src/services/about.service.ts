import {Injectable} from '@angular/core';

@Injectable()
export class AboutService{
  info = {
    nom: "Uzumaki",
    email: "naruto@konoha;com",
    tel: 615268354
  }

  comments = [
    {date: new Date(), message:"A"},
    {date: new Date(), message:"B"},
    {date: new Date(), message:"C"}
  ];

  addComment(c){
    c.date = new Date();
    this.comments.push(c);
  }

  getAllComments(){
    return this.comments;
  }

  getInfo(){
    return this.info;
  }


}
