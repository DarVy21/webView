//_______________________________________________________
window.onload = function(){
const list = document.querySelector(".list");
let tempLink; 

list.addEventListener('click', function(event){
    event.preventDefault();
    let link = event.target;
    if(!link.classList.contains('nav-link')) return;
    colorOfLink(link);
    let destination = link.getAttribute('href').substr(1);
    document.getElementById(destination).scrollIntoView({block: "center", behavior: "smooth"});

});
 function colorOfLink(link){
    if(tempLink) tempLink.classList.remove('colorOfLink');
    tempLink = link;
    tempLink.classList.add('colorOfLink');
 }

//-----------------------------------------------------------------
const phone1 = document.querySelector("#telephone1");
const phone2 = document.querySelector("#telephone2");
const element1 = document.querySelector(".hid1");
const element2 = document.querySelector(".hid2");


phone1.onclick = function(){
    element1.hidden = !element1.hidden;
}
phone2.onclick = function(){
   element2.hidden = !element2.hidden;
} 


//----------------------------------------------------------





//Border of portfolio image on click
const portfolio = document.querySelector(".portfolio-images-block");
let temp;

portfolio.addEventListener("click",function(event){
    let id = event.target;
    if(!id.classList.contains("portfolio-images")) return;
    borderOfPortfolio(id);
})
function borderOfPortfolio(link){
    if(temp) temp.classList.remove('borderOfPortfolio');
    temp = link;
    temp.classList.add('borderOfPortfolio');
}
//-----------------------------------------------------------------
const porfolioList = document.querySelector('.portfolio-list');
const gallery = document.querySelector(".portfolio-images-block");
  
       
let portTemp;

porfolioList.addEventListener("click", function(event){
    event.preventDefault();
    let link = event.target;
    if(!link.classList.contains("portfolio-link")) return;
    portfolioLink(link);
    let galleryItems = gallery.querySelectorAll(".portfolio-images");
    gallery.appendChild(galleryItems[0]);
})
function portfolioLink(link){
    if(portTemp) portTemp.classList.remove("portfolioNavColor");
    portTemp = link;
    portTemp.classList.add("portfolioNavColor");
}
};
//-----------------------------

const form = document.forms.form;
const submit = document.querySelector(".submit");
const name = document.querySelector("#name-required");
const email = document.querySelector("#e-mail");


submit.addEventListener("click", function(event){
    event.preventDefault();
    let dialog = document.querySelector('dialog');
    let br = document.querySelector('.br1');
    let br1 = document.querySelector('.br2');
    let br2 = document.querySelector('.br3');
    let form = document.forms.form;
    let subject = form.elements.subject;
    let describe = form.elements.describe;
    
    br.before("Письмо отправлено ");
    if(subject.value != "") br.after(`Тема: ${subject.value} `);
    else if(subject.value == "") br.after("Без темы ");
    

    if(describe.value != "") br1.after(`Описание: ${describe.value}`);
    else {if(describe.value == "") br1.after("Без описания ");}

    br2.after("")

    dialog.showModal();
    document.querySelector('#close').onclick = function() {
        dialog.remove();
        dialog.close();
        subject.value = "";
        describe.value = "";
        name.value = "";
        email.value = "";
    };
    
})


//Slider
let slice = document.querySelectorAll(".slide_single");
const leftArrow1 = document.querySelector("#arrow-left");
const rightArrow1 = document.querySelector("#arrow-right");
const leftArrow2 = document.querySelector("#arrow-left2");
const rightArrow2 = document.querySelector("#arrow-right2");
const mainSlider = document.querySelector(".Slider");

let slider = [];
for(let i = 0;i<slice.length;i++)
{
     slider[i] = slice[i];
     slice[i].remove();
}

let step = 0;
let offSet = 0;
let counterOfSteps = 0;

function draw(){
    slider[step].style.left = offSet*960 + "px";
    document.querySelector(".karusel").appendChild(slider[step]);
    if(step+1 == slider.length) step = 0;
    else step++;
    offSet = 1;
}

function drawReverse(){
    slider[step].style.left = offSet*960 + "px";
    document.querySelector(".karusel").appendChild(slider[step]);
    if(step+1 == slider.length) step = 0;
    else step++;
    offSet = -1;
}

function left(){
    let slides2 = document.querySelectorAll(".slide_single");
    let offSet2 = 0;
        slides2[0].style.left = offSet2*960 - 960 + "px";
        offSet2++;
        if( counterOfSteps %2==0) mainSlider.style.backgroundColor = "#648BF0";
        else  mainSlider.style.backgroundColor = "#F06C64";
        counterOfSteps++;
        slides2[1].style.left = offSet2*960 - 960 + "px";
        offSet2++;
    setTimeout(function(){
       slides2[0].remove();
        draw();
    },1000);
}   

function right(){
    let slides3 = document.querySelectorAll(".slide_single");
    let offSet3 = 1;
    slides3[0].style.left = offSet3*960 + "px";
    offSet3--;
    if( counterOfSteps %2==0) mainSlider.style.backgroundColor = "#648BF0";
    else  mainSlider.style.backgroundColor = "#F06C64";
    counterOfSteps++;
    slides3[1].style.left = offSet3*960 + "px";
    setTimeout(function(){
        slides3[0].remove();
        draw();
    },1000);
}   

leftArrow1.addEventListener("click",left);
leftArrow2.addEventListener("click",left);
rightArrow1.addEventListener("click",right);
rightArrow2.addEventListener("click",right);

draw();draw();

//Burger-menu
let burgerNav = document.querySelector(".burger-nav");
let links = document.querySelectorAll(".burger-nav-link");
let overfloW = "hidden"

document.querySelector(".menu-btn").addEventListener("click",function(){
    if(this.classList.contains("menu-btn-active")) document.body.style.overflow = "scroll";
    else document.body.style.overflow = "hidden";
    this.classList.toggle("menu-btn-active");
    burgerNav.classList.toggle("moveFromLeft");
    document.querySelector(".logo").classList.toggle("logo__active");
})
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        if(document.querySelector(".menu-btn").classList.contains("menu-btn-active")) document.body.style.overflow = "scroll";
        else document.body.style.overflow = "hidden";
        burgerNav.classList.toggle("moveFromLeft");
        document.querySelector(".menu-btn").classList.toggle("menu-btn-active");
        document.querySelector(".logo").classList.toggle("logo__active");
        /* colorOfLink(link[i]); */
    })
}