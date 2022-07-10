let opcion 
 while(opcion != 5){
   opcion = prompt("1: suma,  2: resta,  3: division,  4: multiplicacion, 5: SALIR")
  if(opcion == 1){
    numero1 = parseInt(prompt("primer numero para sumar"))
    numero2 = parseInt(prompt("segundo numero para sumar"))
   resultado = numero1 + numero2
   alert(`tu resultado es ${resultado}`)
  }
  else if(opcion == 2){
   numero1 = prompt("primer numero para restar")
   numero2 = prompt("segundo numero para restar")
   resultado = numero1 - numero2
   alert(`tu resultado es ${resultado}`)
  }
  else if(opcion == 3){
   numero1 = prompt("primer numero para dividir")
   numero2 = prompt("segundo numero para dividir")
   resultado = numero1 / numero2
   alert(`tu resultado es ${resultado}`)
  }
  else if(opcion == 4){
   numero1 = prompt("primer numero para multiplicar")
   numero2 = prompt("segundo numero para multiplicar")
   resultado = numero1 * numero2
   alert(`tu resultado es ${resultado}`)
  }
 }
 alert("Aplicacion cerrada correctamente")
 
