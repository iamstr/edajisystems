$(document).ready(function () {
  

  $("[data-branch]").click(function (e) {
    
    const current=$(this).attr("data-branch")
    const branch=$(this).attr("data-current-company")
console.log(branch)
    $.post("php_action/currentcompany", { current,branch })
      .then(function(data){return JSON.parse(data)})
    .done(function( data ) {
      if (data.success){
        alert(""+data.messages)
        location.reload()}
      
      else
        alert(""+data.messages)
  });
  })
})