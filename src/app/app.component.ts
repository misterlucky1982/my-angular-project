import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';
  loadedFeature:string = 'recipes';
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
