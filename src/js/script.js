document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    // Додаємо active до активного пункту
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");

            // Закриваємо бургер-меню після вибору пункту (на мобільних)
            if (window.innerWidth < 992) {
                navbarCollapse.classList.remove("show");
            }
        });
    });

    // Закриваємо бургер-меню при натисканні поза ним
    document.addEventListener("click", function (event) {
        if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
            navbarCollapse.classList.remove("show");
        }
    });
});