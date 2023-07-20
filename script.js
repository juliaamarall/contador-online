var caixaSpan = document.getElementById('value');
var btnmais = document.getElementById('mais');
var btnmenos = document.getElementById('menos');

var valor = 0;

const upValor = () => {
  caixaSpan.innerHTML = valor;
};

btnmais.addEventListener("click", function onIncrement() {
  valor += 1;
  upValor();
});

btnmenos.addEventListener("click", function onDecrement(){
 valor -= 1;
 upValor();
});
