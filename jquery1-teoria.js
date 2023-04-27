
/*
.ready() é o método jQuery espera até que o DOM da página HTML esteja pronto para ser manipulado. Você deve agrupar todo o comportamento do JavaScript dentro do método.ready(). Isso garantirá que a página da Web seja renderizada no navegador antes que qualquer código jQuery seja executado.
*/

$(document).ready(() => {
  $("#id"); //busca por id
  $(".class"); //busca por classe
  $("p"); //busca por tag
});

const $ObjetoJquery = $("tag") //declaração de um objeto em jquery

/* O método jQuery .on()adiciona manipuladores de eventos a objetos jQuery. O método usa dois parâmetros: uma string declarando o evento a ser escutado (o manipulador) e uma função de retorno de chamada a ser disparada quando o evento é detectado.
 */
$('#login').on('click', () => { //aciona ação no elemento atravé de click
  $ObjetoJquery.show(); //mostra elemento
  $ObjetoJquery.hide(); // esconde elemento
  $ObjetoJquery.toggle(); //aplica o efeito toggle, por padrao é 400 ms, mas pode passar a quantidade de ms como parametro, controlando com o mesmo tempo oque some e aparece. O toggle mexe no tamanho do elemento alvo, ou seja, ele reduz e aumenta o elemento a medida que acionado
  $ObjetoJquery.fadeIn().fadeOut(); //mesmo processo que o togle, com passagem de parametro controlando oque surge(in) e oque some(out). O fade-in e fade-out não modifica o tamanho da div, ela apenas se torna invisivel, mas ainda ocupa o mesmo espaço
  $ObjetoJquery.fadeToggle(); //o fade toggle junta a ideia do toggle normal (aparecer e sumir com apenas um botao), com o efeito do fade e a propriedade de nao modificar o tamanho da div.
  $ObjetoJquery.slideUp().slideDown();
  $ObjetoJquery.slideToggle(); //slideToggle é o slide up e down juntos, fazendo um elemento surgir verticalmente para baixo e sumir verticalmente para cima, aceita valor de ms como passagem de parametro
})



