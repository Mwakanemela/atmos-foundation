const menu = document.getElementById("menu");

menu.addEventListener("click", function(event) {
    event.preventDefault();
    menu.classList.toggle("cross")
    const nav = document.querySelector(".nav");
    const reg_log = document.querySelector(".log-reg-btns");

    nav.classList.toggle("nav-slide-in");
    reg_log.classList.toggle("log-slide-in");

    
});
