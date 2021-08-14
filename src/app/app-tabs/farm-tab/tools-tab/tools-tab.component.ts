import { Component, OnInit } from '@angular/core';
import { mediaBase } from '../../../contants';

@Component({
  selector: 'app-tools-tab',
  templateUrl: './tools-tab.component.html',
  styleUrls: ['./tools-tab.component.scss']
})
export class ToolsTabComponent implements OnInit {
  tools = [
    {
      image: mediaBase + 'tools/pen.png',
      label: 'Chicken Pen'
    },
    {
      image: mediaBase + 'tools/ladder.png',
      label: 'Ladder'
    },
    {
      image: mediaBase + 'tools/bucket.png',
      label: 'Bucket'
    },
    {
      image: mediaBase + 'tools/door.png',
      label: 'Random Door'
    },
    {
      image: mediaBase + 'tools/tool.png',
      label: 'Some tool'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
  doUrl(path): string {
    return `url(${path})`;
  }
}
