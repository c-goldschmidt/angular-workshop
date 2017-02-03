import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBoxComponent implements OnInit {
  @Input() titleInfo: string;
  @Output() titleClicked = new EventEmitter<string>();

  constructor() { }
  ngOnInit() {
  }

  private onClick = (event: MouseEvent) => {
    this.titleClicked.emit('Hallo event!');
  };
}
