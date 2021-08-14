import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools-tab',
  templateUrl: './tools-tab.component.html',
  styleUrls: ['./tools-tab.component.scss']
})
export class ToolsTabComponent implements OnInit {
  tools = [
    {
      image: '../../../assets/images/tools/pen.png',
      label: 'Chicken Pen'
    },
    {
      image: '../../../assets/images/tools/ladder.png',
      label: 'Ladder'
    },
    {
      image: '../../../assets/images/tools/bucket.png',
      label: 'Bucket'
    },
    {
      image: '../../../assets/images/tools/door.png',
      label: 'Random Door'
    },
    {
      image: '../../../assets/images/tools/tool.png',
      label: 'Some tool'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  doUrl(path): string {
    return `url(${path})`;
  }

}
