import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{
  defaultTabClass: string = 'btn btn-light';//temporary huck
  activeTabClass: string = 'btn btn-secondary border-dark';
  constructor(private router: Router) {
  }

  getClassForShoppingList(){
    return this.router.url==='/shopping-list'?this.activeTabClass:this.defaultTabClass;
  }

  getClassForRecipes(){
    return this.router.url==='/recipes'?this.activeTabClass:this.defaultTabClass;
  }

}
