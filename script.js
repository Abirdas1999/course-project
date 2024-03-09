function openMenu(){
    var navlist = document.getElementById("ul_nav");
    var btn = document.querySelector(".btn");
    navlist.classList.toggle("active");
    btn.classList.toggle("open");
}