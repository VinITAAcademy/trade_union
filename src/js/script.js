/* -------burgerMenu start----------------------------------------------- */
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
/* -------burgerMenu end----------------------------------------------- */
/* -------scrollEvent start----------------------------------------------- */

const navEl = document.querySelector(".navbar");
const navColor = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 56) {
        navEl.classList.add("navbar-scrolled");
    } else if (window.scrollY < 56) {
        navEl.classList.remove("navbar-scrolled");
    }
});
/* -------scrollEvent end----------------------------------------------- */

// =======================Form start====================
const form = document.querySelector(".form");
const inputFields = form.getElementsByClassName("formControl");
const submitButton = document.querySelector(".formSubmitButton");

for (const item of inputFields) {
    item.addEventListener('blur', (event) => {
        validateForm(event);
    });
}

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let isFormValid = true;

    for (const item of inputFields) {
        if (item.id === "first-name") {
            validateName(item);
        } else if (item.id === "last-name") {
            validateLastName(item);
        } else if (item.id === "phone") {
            validatePhone(item);
        } else if (item.id === "email") {
            validateEmail(item);
        }

        if (item.classList.contains("formInvalid")) {
            isFormValid = false;
        }
    }

    if (isFormValid) {
        alert("Форма успішно відправлена!");
        // form.submit(); // Розкоментувати для відправки форми
    }
});

const setError = (element, message) => {
    const errorSection = element.parentElement.querySelector(".error");
    errorSection.innerText = message;
    element.classList.add("formInvalid");
    element.classList.remove("formValid");
};

const setValid = (element) => {
    const errorSection = element.parentElement.querySelector(".error");
    errorSection.innerText = "";
    element.classList.remove("formInvalid");
    element.classList.add("formValid");
};

const validateName = (nameField) => {
    const regex = /[A-Za-zА-Яа-яЁё\s]+/;

    if (nameField.value === "") {
        setError(nameField, "Name is required");
    } else if (!regex.test(nameField.value)) {
        setError(nameField, "Name is incorrect");
    } else {
        setValid(nameField);
    }
};

const validateLastName = (lastNameField) => {
    const regex = /[A-Za-zА-Яа-яЁё\s]+/;

    if (lastNameField.value === "") {
        setError(lastNameField, "Last name is required");
    } else if (!regex.test(lastNameField.value)) {
        setError(lastNameField, "Last name is incorrect");
    } else {
        setValid(lastNameField);
    }
};

const validatePhone = (phoneField) => {
    const regex = /^(\+38)?0(39|50|63|66|67|68|73|89|9[1-9])[0-9]{7}$/;

    if (phoneField.value === "") {
        phoneField.value = '+380';
    } else if (!regex.test(phoneField.value)) {
        setError(phoneField, "Phone is incorrect");
    } else {
        setValid(phoneField);
    }
};

const validateEmail = (emailField) => {
    const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

    if (emailField.value === "") {
        setError(emailField, "Email is required");
    } else if (!regex.test(emailField.value)) {
        setError(emailField, "Email is incorrect");
    } else {
        setValid(emailField);
    }
};

const validateForm = (event) => {
    switch (event.target.id) {
        case "first-name":
            validateName(event.target);
            break;
        case "last-name":
            validateLastName(event.target);
            break;
        case "phone":
            validatePhone(event.target);
            break;
        case "email":
            validateEmail(event.target);
            break;
        default:
            alert("Validation error!");
    }
};
// =======================Form emd====================


