//get all elements from menu
const allItems = document.querySelectorAll(".navmenu ul li a");
allItems.forEach(item =>{
    item.addEventListener("click", function(e){
        // here we will write loop remove all prevois classes active
        for(var i = 0; i < allItems.length; i++){
            allItems[i].classList.remove("active");
            
        }
        this.classList.add("active");
    })
})

var status = 0;
// 0 nanfas
// 1 lakdjask

if(status == 0){
    $(".mainthangka").mouseover(function(){
        gsap.to("#intro-thangka1", {x: 30, y: 40, duration: 1});
        gsap.to("#intro-thangka2", {x: 20, y: 50, duration: 1});
        gsap.to("#intro-thangka3", {x: -20, y: -30, duration: 1});
        gsap.to("#intro-thangka4", {x: 30, y: 30, duration: 1});
    }).mouseleave(function(){
        gsap.to("#intro-thangka1", {x: 0, y: 0, duration: 1});
        gsap.to("#intro-thangka2", {x: 0, y: 0, duration: 1});
        gsap.to("#intro-thangka3", {x: 0, y:-10, duration: 1});
        gsap.to("#intro-thangka4", {x: 0, y: 0, duration: 1});
    })
}

$("#intro-thangka1").click(function(){
        gsap.to($(this), {x:0, y:0, scale:1.5, duration: 1});
        gsap.to($(this).siblings(), {opacity: 0, duration: .5});
        $("#infotitle").html("Symbols");
});

$("#closeicon").click(function(){
        gsap.to($("#intro-thangka1"), {x:0, y:0, scale:1, duration: 1});
        gsap.to($("#intro-thangka1").siblings(), {opacity: 1, duration: .5});
        $("#infotitle").html("What is Thangka?");
});