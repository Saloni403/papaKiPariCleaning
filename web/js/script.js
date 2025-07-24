let list= document.querySelector(".bi-list")
let menu= document.querySelector(".menu") 
let closeing= document.querySelector(".bi-x")
list.addEventListener("click", function(){
    menu.style.right="0"
})
closeing.addEventListener("click", function(){
    menu.style.right="-350px"
})



let plancard= document.querySelectorAll(".planscard p")
plancard.forEach(element => {
    let icon = document.createElement("i");
icon.className = "bi bi-arrow-right-circle";
icon.style.color="#057fb2"
let space = document.createTextNode(" ");
 element.insertBefore(space, element.firstChild); // space goes before existing text
    element.insertBefore(icon, space);
});




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
 