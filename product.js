
const price = localStorage.getItem("Price__for__Product__to__be__viwed");
const name= localStorage.getItem("Name__for__Product__to__be__viwed");
const image__url= localStorage.getItem("Image__for__Product__to__be__viwed");
// swal(name,price)
console.log(name+price+image__url)




// Getting the classlist 
let name__control = document.querySelector(".name__control")
let picture__control = document.querySelector(".picture__control")
let picture__control2 = document.querySelector(".picture__control2")
let price__control = document.querySelector(".price__control")
name__control.innerHTML=name
price__control.innerHTML=price
picture__control.src=image__url
picture__control2.src=image__url




//add to cart 

function functionAddToCart(){

     
   localStorage.setItem("price__for",price)     
   localStorage.setItem("name__for",name)   
   window.location.href = "checkouts.html";  
          
        
      
}