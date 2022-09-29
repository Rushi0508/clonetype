let loader = document.querySelector(".loader");
let container = document.querySelector(".container");

setTimeout(rmvloader, 2000);

function rmvloader(){
    loader.style.display = "none";
    container.style.display = "flex";
}
