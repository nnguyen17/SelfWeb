import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  voteNum: number = 0;
  isActive: boolean = false;
  display: boolean = false;
  comment: string = "";
  commentList: any = [] ;

  count(){
    this.voteNum += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }

  toggleData(){
    this.display = !this.display;
  }

  post(){
    this.commentList.push(this.comment);
    this.comment= "";
  }

}
