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
 

const dropdown = document.querySelector('.droparrow');
const sublist = document.querySelector('.sublist');

// if (window.innerWidth > 768){
// dropdown.addEventListener('mouseover',()=>{
//   sublist.style.opacity="1"
//   sublist.style.visibility="visible"
//    sublist.style.top="20%"
// })
// dropdown.addEventListener('mouseout',()=>{
//   sublist.style.opacity="0"
//   sublist.style.visibility="hidden"
//    sublist.style.top="40%"
// })}
 
let isOpen = false;

dropdown.addEventListener('click', (e) => {
  e.preventDefault(); // prevent link jump
  isOpen = !isOpen;

  if (isOpen) {
    sublist.style.opacity = "1";
    sublist.style.visibility = "visible";
    sublist.style.top = "20%";
  } else {
    sublist.style.opacity = "0";
    sublist.style.visibility = "hidden";
    sublist.style.top = "40%";
  }
});



const dropdown2 = document.querySelector('.droparrow2');
const sublist2 = document.querySelector('.sublist2');
dropdown2.addEventListener('click', (e) => {
  e.preventDefault(); // prevent link jump
  isOpen = !isOpen;

  if (isOpen) {
    sublist2.style.opacity = "1";
    sublist2.style.visibility = "visible";
    sublist2.style.top = "75%";
  } else {
    sublist2.style.opacity = "0";
    sublist2.style.visibility = "hidden";
    sublist2.style.top = "100%";
  }
});





let ctgCards =document.querySelectorAll(".ctg")
let ctgDescs =document.querySelectorAll(".ctgdes")
function showCtgDesc(event) {
  // Find the clicked .ctg element
  let clickedCard = event.currentTarget.querySelector(".ctg");

  // Find index of clicked .ctg
  let index = Array.from(ctgCards).indexOf(clickedCard);

  // Hide all descriptions
ctgCards.forEach(cardshd => cardshd.classList.remove("cardshadow"));
  clickedCard.classList.toggle("cardshadow")
  ctgDescs.forEach(desc => desc.style.display = "none")
  // Show the matching one
  if (ctgDescs[index]) {
    ctgDescs[index].style.display = "flex"; // or "block" based on your layout
  }
}

// Initial hide
// ctgCards.classList.remove("cardshadow")
ctgCards.forEach(cardshd => cardshd.classList.remove("cardshadow"));
ctgDescs.forEach(desc => desc.style.display = "none");
if (ctgDescs[0]) {
  ctgDescs[0].style.display = "flex";
}

