function changbg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;

    if(scrollValue < 200){
        navbar.classList.remove('bgcolor');
    }else{
        navbar.classList.add('bgcolor');
    }
}

    window.addEventListener('scroll', changbg)


    let button = document.querySelector(".arrow"), 
    list = document.querySelector(".nav-list");

button.addEventListener("click", function () {
    list.classList.toggle("display");
    button.children[0].classList.toggle("toggle1");
    button.children[1].classList.toggle("toggle2");
    button.children[2].classList.toggle("toggle3");

})
    
