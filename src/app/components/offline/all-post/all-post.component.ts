import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {
  @Input() post: any = null;
  @Output() emit = new EventEmitter<any>();

  newComment: any = null;
  user: any = null;
  constructor() { }

  ngOnInit(): void {
    console.log(this.post);
    this.user = JSON.stringify(localStorage.getItem('user'));
  }

  addComment(event: any) {
    if (event.keyCode === 13) {
      this.emit.emit({ 'post': this.post, 'newComment': this.newComment, 'user': this.user });
      setTimeout(() => {
        this.newComment = '';
      }, 100)
    }
  }
}
