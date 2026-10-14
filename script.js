// Поява блоків на сторінці
const blocks = document.querySelectorAll("section div");

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

blocks.forEach(function(block) {
    block.classList.add("hidden");
    observer.observe(block);
});


// Виділення поточної сторінки в меню
const currentPage = location.pathname.split("/").pop() || "main.html";

const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach(function(link) {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});


// Кнопка повернення нагору
const topButton = document.createElement("button");

topButton.textContent = "^";
topButton.className = "top-button";
topButton.setAttribute("aria-label", "Повернутися нагору");

document.body.appendChild(topButton);

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        topButton.classList.add("visible");
    } else {
        topButton.classList.remove("visible");
    }
});

topButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Відкриття і закриття меню на телефоні
const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const links = menu.querySelectorAll("a");

menuButton.addEventListener("click", function() {
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
    } else {
        menu.classList.add("open");
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-expanded", "true");
    }
});

// Закриття меню після переходу на сторінку
links.forEach(function(link) {
    link.addEventListener("click", function() {
        menu.classList.remove("open");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
    });
});
