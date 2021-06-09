import { Component, Renderer2 } from '@angular/core';
import { TextDirectionController } from './shared/Services/languages/TextDirectionController';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aradeena';

  public directionController = new TextDirectionController();

  constructor(private renderer: Renderer2){
    this.renderer.setAttribute(
      document.body, 'dir', this.directionController.textDirection
    );
  }
}
