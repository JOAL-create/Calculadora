var n1,
  n2,
  pantalla = 0;
const pantalla1 = document.getElementById("num1");
const pantalla2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");
const suma = () => resultado.value = n1 + n2;
const resta = () => resultado.value = n1 - n2;
const mul = () => resultado.value = n1 * n2;
const div = () => resultado.value = n1 / n2;
const potencia = () => resultado.value = Math.pow(n1, n2);
const raiz = () => resultado.value = Math.sqrt(n1);
const ObtenerNumeros = () => {
  n1 = Number(pantalla1.value) || 0;
  n2 = Number(pantalla2.value) || 0;
};
const UsarPantalla = screen => pantalla = screen;
const LimpiarPantallas = () => {
  pantalla1.value = "";
  pantalla2.value = "";
  resultado.value = "";
};
const ConcatenarNumero = num => {
  if (pantalla == 1 || pantalla == 0) pantalla1.value += num;else if (pantalla == 2) pantalla2.value += num;
};
document.addEventListener("keydown", event => {
  switch (event.key) {
    case "0":
      ConcatenarNumero(0);
      break;
    case "1":
      ConcatenarNumero(1);
      break;
    case "2":
      ConcatenarNumero(2);
      break;
    case "3":
      ConcatenarNumero(3);
      break;
    case "4":
      ConcatenarNumero(4);
      break;
    case "5":
      ConcatenarNumero(5);
      break;
    case "6":
      ConcatenarNumero(6);
      break;
    case "7":
      ConcatenarNumero(7);
      break;
    case "8":
      ConcatenarNumero(8);
      break;
    case "9":
      ConcatenarNumero(9);
      break;
    case ".":
      ConcatenarNumero(".");
      break;
    case "+":
      ObtenerNumeros();
      suma();
      break;
    case "-":
      ObtenerNumeros();
      resta();
      break;
    case "*":
      ObtenerNumeros();
      mul();
      break;
    case "/":
      ObtenerNumeros();
      div();
      break;
    case "p":
      ObtenerNumeros();
      potencia();
      break;
    case "r":
      ObtenerNumeros();
      raiz();
      break;
    case "ArrowUp":
      UsarPantalla(1);
      break;
    case "ArrowDown":
      UsarPantalla(2);
      break;
    case "l":
      LimpiarPantallas();
      break;
  }
});
