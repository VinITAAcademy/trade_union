document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");

            if (window.innerWidth < 992) {
                navbarCollapse.classList.remove("show");
            }
        });
    });

    document.addEventListener("click", function (event) {
        if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
            navbarCollapse.classList.remove("show");
        }
    });
});
 
const navEl = document.querySelector(".navbar");
const navColor =document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if(window.scrollY >= 56) {
      navEl.classList.add("navbar-scrolled"); 
    }else if(window.scrollY < 56){
        navEl.classList.remove("navbar-scrolled");
    }
});
