document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", function () {
        const parent = this.parentElement;
        const content = parent.querySelector(".accordion-content");
        const isActive = parent.classList.contains("active");

        if (isActive) {
            content.style.maxHeight = null;
            parent.classList.remove("active", "open");
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            parent.classList.add("active", "open");
        }
    });
});