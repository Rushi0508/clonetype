let tabs = document.querySelectorAll(".tab-toggle");

let contents = document.querySelectorAll(".content");

tabs.forEach((tab, index)=>{
    tab.addEventListener("click", ()=>{
        contents.forEach((content)=>{
            content.classList.remove("active");
        });
        tabs.forEach((tab)=>{
            tab.classList.remove("active");
        });
        contents[index].classList.add("active");
        tabs[index].classList.add("active");
    });
});