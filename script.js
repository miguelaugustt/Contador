const btnAdicionar = document.querySelector("#adicionar1");
const btnTirar = document.querySelector("#tirar1");
const btnZerar = document.querySelector("#zerar");
const numeroContador = document.querySelector("#numero");
const EasterEgg = new Audio(``)

btnAdicionar.addEventListener("click", (e) => {
  numeroContador.textContent = Number(numeroContador.textContent) + 1;
});
btnTirar.addEventListener("click", (e) => {
  if (Number(numeroContador.textContent) > 0) {
    numeroContador.textContent = Number(numeroContador.textContent) - 1;
  }
});
btnZerar.addEventListener("click", (e) => {
  numeroContador.textContent = 0;
});
if(Number(numeroContador.textContent) = 67){
    
}
