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
  arrayImagenes = ['asce.jpg', 'kaydo.jpg', 'shanks.jpg', 'trafalgar.jpg', 'asce.jpg', 'kaydo.jpg', 'shanks.jpg', 'trafalgar.jpg'];

  // posicionFilaInicial = [[false,false,false]];

  // primero iniciaremos el juego

  // set_imagen() {
  //   //recoges el valor del campo oculto
  //   var valor = document.getElementById("juego");
  //   //pones la imagen en la celda
  //   document.getElementById("juego").innerHTML =
  //   "<img src='" + valor + "asce.jpg' alt=''>";
  //   }

  
  reiniciarJuego() {
    var juego = document.getElementById("juego");
    juego.style.opacity = "0.3";
  }

  levantarCartas(event) {
    let identificar = event.target.id;
    console.log(identificar);
    // let identificar = document.getElementById();
    // identificar.style.opacity="0";
  }
}

// createReferenceSolution() {
//   let posicion = [];
//   // si i es menor que el numero de piezas.... 
//   for (let i = 0; i < numPiezas; i++) {
//     posicion.push(pieceToOffset(i,anchura,altura,numPiezas));
//   }
//   return posicion;
// }


  

//   shuffle(arrayImagenes) {
//     // arrayImagenes = ['asce.jpg','kaydo.jpg','shanks.jpg','trafalgar.jpg','asce.jpg','kaydo.jpg','shanks.jpg','trafalgar.jpg'];
//     // inicializamos el array en el length -1 y lo recorremos del final al principio
//     for (let index = arrayImagenes.length - 1; index >= 0; index--) {
//       let numRandom = Math.floor(Math.random() * index)
//       let auxiliar = arrayImagenes[numRandom];
//       arrayImagenes[numRandom] = arrayImagenes[index];
//       arrayImagenes[index] = auxiliar;
//     }
//   }

//   drawContentPuzzle(posicion) {
//     for (let i = 0; i < posicion.length; i++) {
//       document.getElementById('piece'+i).style.backgroundPosition = posicion[i][0]+'px '+posicion[i][1]+'px';
//     }
// }

// }





