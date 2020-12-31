let pricefinal = localStorage.getItem("price__for")
let namefinal = localStorage.getItem("name__for")
// alert(namefinal+pricefinal)





// access 

let mainproductname = document.querySelector(".objectdisplay")
let mainproducttotals = document.querySelector(".totalControl")
let mainproductdiscount = document.querySelector(".discountControl")
let mainproducttotal = document.querySelector(".mainproducttotal")
mainproductname.innerHTML=namefinal
mainproducttotal.innerHTML=pricefinal
mainproductdiscount.innerHTML=Math.trunc(pricefinal/23)
mainproducttotals.innerHTML=pricefinal - Math.trunc(pricefinal/23) 

  
function thankyou(){
    let phonenumber__check = document.querySelector(".phonenumber__check")
    let addresscheckControl = document.querySelector(".addresscheckControl")
    let addresscheckControl2 = document.querySelector(".addresscheckControl2")
        // console.log(phonenumber__check)
        if(phonenumber__check.value.length==0 || addresscheckControl.value.length==0 || addresscheckControl2.value.length==0){
            swal("Checkout Error", "Please fill out the required fields");
            // console.log("length is " + phonenumber__check.value.length)
    
        }
        else{
            // console.log("here" + phonenumber__check.innerHTML)
    
        window.location.href = "thankyou.html";
    
    
        }
    
    }