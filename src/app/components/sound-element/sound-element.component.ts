import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-element',
  templateUrl: './sound-element.component.html',
  styleUrls: ['./sound-element.component.scss'],
})
export class SoundElementComponent implements OnInit {
  @Input() iconPath!: string;
  @Input() text!: string;
  @Input() isActive = false;

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}
}
