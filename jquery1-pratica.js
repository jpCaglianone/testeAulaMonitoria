//-------------------- PARTE 1 -------------------------------------

$(document).ready( ()=> {
  
  $("#teste").on("click", function () {
    $("#teste").hide()
    $("p").show()
  })
  
  //explicar atribuição
  
  const $teste0 = $("#teste0")
  const $botao0 = $("#tg")

  $botao0.on("click", () => {
    $teste0.toggle(4500)
  })

  const $teste1 = $("#teste1")
  const $botao1 = $("#fade")
  //empilhamento
  $botao1.on("click", () => {
    $teste1
      .fadeIn(1500)
      .fadeOut(2500)
  })

  const $teste2 = $("#teste2")
  const $botao2 = $("#fadetg")
  //empilhamento
  $botao2.on("click", () => {
    $teste2.fadeToggle(2000)
  })
  
})


//-------------------- PARTE 2 -------------------------------------