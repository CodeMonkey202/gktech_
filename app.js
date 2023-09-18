function tell(key){
    let count = document.getElementById("cart-quantity"); 
    let cartNum = count.innerHTML;
    let newKey = parseInt(cartNum) + 1;
    let newCount = document.getElementById("cart-quantity");
    let nc = newCount.innerHTML = newKey;
    // let message = document.getElementsByClassName("")
    let images= document.getElementsByTagName("img")
localStorage.setItem("Carts",nc);
let newCartTotal = localStorage.getItem("Carts");
console.log(newCartTotal)
// Iterate through all stored name/value pairs
for(var name in localStorage) { // Iterate all stored names 
 var value = localStorage[name]; // Look up the value of each one
}

}