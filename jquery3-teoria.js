/*
 para ativar o css pelo jqeury é utilizado
*/

$('.objetoAlvo').css('nomeAtributoCss', 'valorAtributoCss');
//exemplo $('.example-class').css('color', '#FFFFFF');

// outra forma de utilizar o css é empilhando o mesmo 

$('.objetoAlvo').css(
  {
    color: '#FFFFFF',
    backgroundColor: '#000000',
    fontSize: '20px'
  }
)

//O método jQuery .animate()aprimora as possibilidades visuais fazendo alterações no valor do CSS durante um período de tempo.

$('.objetoAlvo').animate(
  {
    height: '100px',
    width : '100px',
    borderWidth : '10px'
  }
)