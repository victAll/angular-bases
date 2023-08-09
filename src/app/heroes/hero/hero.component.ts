import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string= 'ironman';
  public age: number= 45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return ` ${this.name } - ${this.age}`

  }

  changeHero():void{
    this.name = 'super man';
  }

  changeAge():void{
    this.age=18;
  }

  resetForm():void{
    this.name= 'ironman';
    this.age=45;
    //CON JS
    //document.querySelector('h1')!.innerHTML='<h1>Cambiado desde funcion Angular</h1>';
    /*document.querySelectorAll('h1').forEach( element =>{
      element.innerHTML='<h1>Cambiado TODOS desde funcion Angular</h1>';
    });*/

  }

}
