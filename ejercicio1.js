function ImprimirNumeros(numero) {
	for (let i = 0; i < numero; i++) {
        console.log(i)
	}
} 	

const imprecion = ImprimirNumeros(5)


function imprimerOtrosNumeros(numeroDesde, numeroHasta) {
	if (numeroDesde < numeroHasta) {
	for (let i = numeroDesde; i < numeroHasta; i++) {
		console.log(i)
	}
  }
}

const impresora = imprimerOtrosNumeros(2, 10)


function contarEspacios(texto) {
         let espacios = 0

         for (let i = 0; i < texto.length; i++){
              if (texto[i] === ' '){
              	espacios = espacios + 1
              }
         }

         return espacios
 }

function buscarTweets(mensajes, texto){
	let resultados = []
	
	for (let i = 0; i < mensajes.length; i++){
		if (mensajes[i].includes(texto)) {
			resultados.push(mensajes[i])
		}
	 }
	 return resultados	
}


console.log(buscarTweets(['luna sangrienta', 'luna dorada', 'sol languido'], 'sol'))



function convertirExpresionAAsterisco(expresion) {

  let resultado = ''



  for (let i = 0; i < expresion.length; i++) {

    resultado += '*'

  }



  return resultado

}



function censurarTexto(texto, expresionesCensuradas) {

  let nuevoTexto = texto



  for (let i = 0; i < expresionesCensuradas.length; i++) {

    const expresionCensurada = expresionesCensuradas[i]

    if (nuevoTexto.includes(expresionCensurada)) {

      nuevoTexto = nuevoTexto.replace(expresionCensurada, convertirExpresionAAsterisco(expresionCensurada))

    }

  }



  return nuevoTexto

}

console.log(censurarTexto('Ideas inteligentes sobran en lo que hipócritamente llamados realidad', ['realidad', 'sobran']))
	
