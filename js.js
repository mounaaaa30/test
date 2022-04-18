var plusBtns=document.querySelectorAll(".plus-btn");

var total=Number(document.getElementById("total").children[1].children[0].innerHTML)
for ( let btn of plusBtns ){
btn.addEventListener ("click", function () {
    let qty=Number(btn.parentNode.children[5].innerHTML);
    let price=Number(btn.previousElementSibling.children[0].innerHTML);
qty++
btn.parentNode.children[5].innerHTML=qty;
total+=price;
document.getElementById("total").children[1].children[0].innerHTML=total;
})
 }
 var minusBtns=document.querySelectorAll(".mines-btn");

for ( let btn of minusBtns ){
btn.addEventListener ("click", function () {
    let qty=Number(btn.parentNode.children[5].innerHTML);
    let price=Number(btn.parentNode.children[3].children[0].innerHTML);
if (qty >0) { 
qty--;
btn.parentNode.children[5].innerHTML=qty;
total-=price;
document.getElementById("total").children[1].children[0].innerHTML=total;
 }

})

 }
 var articles=document.querySelectorAll(".boton");


 for ( let btn of articles){
    btn.addEventListener("click", function(){
        let qty=Number(btn.parentNode.children[1].children[5].innerHTML);
        let price=Number(btn.parentNode.children[1].children[3].children[0].innerHTML);
    
        let tota=Number(document.getElementById("total").children[1].children[0].innerHTML);
         btn.parentNode.remove();
         tota-=price*qty;
      
         document.getElementById("total").children[1].children[0].innerHTML=tota;
    
         
     })
 }

