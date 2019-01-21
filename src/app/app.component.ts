import { Component } from '@angular/core';
import { url } from 'inspector';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoFinalAngular';
  comprobar = false;
  // arrayOpacidades = [0,0,0,0,0,0,0,0];
  myArray = ['asce.jpg', 'kaydo.jpg', 'shanks.jpg', 'trafalgar.jpg', 'asce.jpg', 'kaydo.jpg', 'shanks.jpg', 'trafalgar.jpg']; 
  
  constructor (){
    this.shuffle();
  }

  // posicionFilaInicial = [[false,false,false]];

  // primero iniciaremos el juego

  // set_imagen() {
  //   //recoges el valor del campo oculto
  //   var valor = document.getElementById("juego");
  //   //pones la imagen en la celda
  //   document.getElementById("juego").innerHTML =
  //   "<img src='" + valor + "asce.jpg' alt=''>";
  //   }

  
  barajarCartas() {
    let random = this.myArray[Math.floor(Math.random() * this.myArray.length)];
    console.log(random)
  }

  sacarId(event) {
    let identificar = event.target.id;
    console.log(identificar);
    // let random = this.myArray[Math.floor(Math.random() * this.myArray.length)];
    // console.log(random)
  
  }

  repartirImagenes(){
    var posicion = document.getElementById("piece1")
      posicion.style.opacity="1";
    
  }
  
  shuffle() {
    for (let index = this.myArray.length - 1; index >= 0; index--) {
      let numRandom = Math.floor(Math.random() * index)
      let auxiliar = this.myArray[numRandom];
      this.myArray[numRandom] = this.myArray[index];
      this.myArray[index] = auxiliar;
    }
  }
}
//   drawContentPuzzle(posicion) {
//     for (let i = 0; i < posicion.length; i++) {
//       document.getElementById('piece'+i).style.backgroundPosition = posicion[i][0]+'px '+posicion[i][1]+'px';
//     }
// }

// }





