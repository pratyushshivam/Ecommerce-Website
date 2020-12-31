let mainproductname = document.querySelector(".mainproductname")
let totalControl = document.querySelector(".totalControl")
let discountControl = document.querySelector(".discountControl")
let mainproducttotal = document.querySelector(".mainproducttotal")
let cartitems = document.querySelector(".cartitemsmain")
let objectdisplay = document.querySelector(".objectdisplay")
let objectpricedisplay = document.querySelector(".objectpricedisplay")
let retrieveitemobject = JSON.parse(localStorage.ItemsCart)
// Object.values(JSON.parse(localStorage.ItemsCart)).length)
let numberofitems = (Object.values(JSON.parse(localStorage.ItemsCart)).length)/3
cartitems.innerHTML=numberofitems;
// objectdisplayfunction();
const printarrayname = (arrayforname, arrayforprice) => {
    objectdisplay.innerHTML="";
    objectpricedisplay.innerHTML="";
    var counter=0;
    let displayProduct = arrayforname.map(
      
      product =>  ` <div>
       ${product}
                    </div>
                   
                    `
    );
    let displaypriceProduct = arrayforprice.map(
      
        productprice =>  ` <div>
        ₹${productprice}
                      </div>
                     
                      `
      );





      var sum = arrayforprice.reduce(function(a, b){
        return a + b;
    }, 0);
    mainproducttotal.innerHTML="₹" + sum
    discountControl.innerHTML="₹" + Math.trunc(sum/(arrayforprice.length + 10))
    totalControl.innerHTML= "₹" + (sum - Math.trunc(sum/(arrayforprice.length + 10)))






    console.log(displayProduct)
    console.log(displaypriceProduct)
   
  
    displayProduct = displayProduct.join("");
    displaypriceProduct = displaypriceProduct.join("");
  console.log(displayProduct)
  if (objectdisplay) {
    objectdisplay.innerHTML=` ${displayProduct}`
  }
  if (objectpricedisplay) {
    objectpricedisplay.innerHTML=` ${displaypriceProduct}`
  }
  console.log(objectdisplay.innerHTML)

 
  };
displayProduct(JSON.parse(localStorage.ItemsCart))







//displaying all the items as a list
// function objectdisplayfunction(){
//     for(var i=0;i<numberofitems+12;i++){
//         if(JSON.parse(localStorage.ItemsCart)[`Price for item ${i}`]){
//             console.log(JSON.parse(localStorage.ItemsCart)[`Price for item ${i}`])
//             mainproductname.innerHTML=JSON.parse(localStorage.ItemsCart)[`Name for item ${i}`]
//         }

//     }
// }
// objectdisplay.innerHTML=

  
    // displayProduct = displayProduct.join("");
    // if (categoryCenter) {
    //   categoryCenter.innerHTML = displayProduct;
    // }


  function displayProduct(itemobject){
      var objectnamearray = new Array()
      var objectpricearray = new Array()
      for(var i = 0; i<35;i++){
          if(itemobject[`Name for item ${i}`]){
              console.log(itemobject[`Name for item ${i}`])
              objectnamearray.push(itemobject[`Name for item ${i}`])
              objectpricearray.push(itemobject[`Price for item ${i}`])
              


          }
      }
      console.log(objectnamearray)
      console.log(objectpricearray)
      printarrayname(objectnamearray,objectpricearray)

    

  }




//   function  printarrayname(arrayforname){
//     //   running
//     //   console.log(arrayforname)
//     let printname = "The products are : "
//      arrayforname.map(function(val){ 
//        printname.join(val)
       

         
//     }) 
//     // printname = printname.join("");
//     console.log(printname)

//   }






  
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