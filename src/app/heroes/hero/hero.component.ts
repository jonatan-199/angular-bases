import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string='iroman' ;
  public age:number=45 ;
  get capitalizedName():string{
    return this.name.toUpperCase();
  }
  getHeroDescription():string{
    return `
      ${this.name} - ${ this.age } - ok'
      `
  }
  changeHero(name:string):void{
    this.name=name;
  }
  changeAge(age:number):void{
    this.age=age;
  }

  resetForm():void{
    this.name="iromane";
    this.age=45;
  }
}
