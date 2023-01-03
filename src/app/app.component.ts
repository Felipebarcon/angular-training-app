import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  top: any;
  left: any;

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event: any) {
    this.top = $event.pageY - 10 + 'px';
    this.left = $event.pageX - 10 + 'px';
  }
}
