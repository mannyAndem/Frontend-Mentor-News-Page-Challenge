const navMenu = document.querySelector(".menu");
const navToggle = document.querySelector(".menu-toggle");

navToggle.addEventListener("click", ()=>{
    const visibility = navToggle.getAttribute("open");

    console.log(visibility);

    if(visibility==="true"){
        navToggle.setAttribute("open", false);
        navMenu.setAttribute("open", false);
    }else{
        navToggle.setAttribute("open", true);
        navMenu.setAttribute("open", true);
    }
})