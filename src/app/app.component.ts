import { Component } from '@angular/core';

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'top-colleagues';
  unCollegue = {
    pseudo: 'Jessica',
    score: 0,
    photo:
      'https://images.unsplash.com/photo-1580923368248-877f237696cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
  };
}
