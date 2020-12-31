let orderID = document.querySelector(".orderid")
orderID.innerHTML= Math.random().toString(36).slice(2) +  Math.floor((Math.random() * 100) + 1);

function redirecttoHome(){
    swal({
      title: "Redirecting you to Home Page",
 
    });
    
    setTimeout(function()
    {   window.location.href = "index.html";
  }, 1000);
  
   
               
  
  
  }