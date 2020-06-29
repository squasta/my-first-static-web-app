import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello JR {{value}}</div>`,
})
export class AppComponent {
  value = 'Ma demo en live';
}
