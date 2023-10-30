import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>Welcome to {{title}}! </h1>
      <p> if you didn't know two plus two is {{ 2 + 2 }} </p> 
     
  `,
  styles: []
})
export class AppComponent {
  title = 'frontend';
}
