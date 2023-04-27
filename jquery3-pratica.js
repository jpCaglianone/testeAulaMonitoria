 $(document).ready( ()=> {

  let prim = true;
   
    $("#teste0").animate({
        width: "500px",
      }, 4000)

$("#teste1").on("click", ()=>{
  $("#teste1").css({
      backgroundColor: "red",
      height:"200px"
    }) 
})

  $("#teste3").on("click", ()=>{
  if (prim){
    $("#teste3").addClass("classeAdd");
    }
  else{
    $("#teste3").removeClass("classeAdd");
  }
    prim = !prim;
})


 $("#teste2").on("click", ()=>{
   $("#teste2").toggleClass("classe1")
 })
   
 }  
)