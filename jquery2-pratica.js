 $(document).ready( ()=> {

  $("#teste0").on("mouseenter", () => {
    $("#teste0").css("background","blue")
  })

$("#teste1")
  .on("mouseleave", ()=>{
     $("#teste1")
       .css("background","red")
}) 

    $("#teste2")
      .on("mouseenter", ()=> {
        $("#teste2").css("background","yellow")
      })
      .on("mouseleave", ()=>{
        $("#teste2").css("background","green")
      })


   $("#teste3")
    .on("mouseenter",event => {
        $(event.currentTarget).addClass("teste3")
    })
   
  })