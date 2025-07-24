let list= document.querySelector(".bi-list")
let menu= document.querySelector(".menu") 
let closeing= document.querySelector(".bi-x")
console.log(list);
console.log(menu);
console.log(closeing);
list.addEventListener("click", function(){
    menu.style.right="0"
})
closeing.addEventListener("click", function(){
    menu.style.right="-350px"
})






let topicon= document.querySelector(".attop")

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    topicon.style.display = "block";
  } else {
    topicon.style.display = "none";
  }
});

function screenScroll(){
    window.scrollTo({
  top: 0,
  behavior: "smooth" // for smooth scrolling
});
}
 