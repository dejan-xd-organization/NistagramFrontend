import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-new-people',
  templateUrl: './list-new-people.component.html',
  styleUrls: ['./list-new-people.component.css']
})
export class ListNewPeopleComponent implements OnInit {
  @Input() user: any = null;
  @Output() emit = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  sendFolower(user: any) {
    this.emit.emit({ 'user': user });
  }
}
