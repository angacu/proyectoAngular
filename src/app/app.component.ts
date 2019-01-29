import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'proyectoFinalAngular';
  myArray = ['asce.jpg', 'asce.jpg', 'shanks.jpg', 'shanks.jpg', 'kaydo.jpg', 'kaydo.jpg', 'trafalgar.jpg', 'trafalgar.jpg'];
  arrayFondo = ['fondo.jpg'];
  cartasDestapadas = [];
  tengoQueTapar = false;
  arrayTapar = [false, false, false, false, false, false, false, false]; 
  
  // segundoClick = ;

  constructor() {
    this.shuffle();
  }

  comprobarFotos(event) {
    let id = parseInt(event.target.id) -1;
    console.log(event.target.id);
    this.arrayTapar[id] = true;
    this.cartasDestapadas.push(id);
    console.log(this.cartasDestapadas);

    if (this.cartasDestapadas.length == 2) {
      let i = this.cartasDestapadas[0] 
      let j = this.cartasDestapadas[1]
      
        if (this.myArray[i] === this.myArray[j]) {
          this.cartasDestapadas = [];
        }else{
          this.cartasDestapadas = [];
          setTimeout( ()=>{
            this.arrayTapar[i] = false;
            this.arrayTapar[j] = false;
            this.tengoQueTapar = true;
          },2000);
        }
    }
  }

    // sonIguales(event){
    //   if (this.myArray[0]===this.myArray[1]) {
    //      console.log("funciona maquina");
    //   }else{
    //     console.log("no")
    //   }
    // }

  




  shuffle() {
    for (let index = this.myArray.length - 1; index >= 0; index--) {
      let numRandom = Math.floor(Math.random() * index)
      let auxiliar = this.myArray[numRandom];
      this.myArray[numRandom] = this.myArray[index];
      this.myArray[index] = auxiliar;
    }
  }
}




