window.scroll = function(){
    navFunction()
};

let navbar = document.getElementById("navbar");

let sticky = navbar.offsetTop;

function navFunction(){
    if (window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    } 
}

function bottomNav() {
    const x= document.getElementsByClassName("navBar");
    if(x.className === "navBar"){
        x.className +="responsive";
    } else {
        x.className = "navBar"
    }
}