
const cards = document.querySelectorAll("section > div");


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

cards.forEach((card) => {
    card.classList.add("hidden");
    observer.observe(card);
});


const currentPage = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach((link) => {
    const page = link.getAttribute("href").split("/").pop();

    if (page === currentPage) {
        link.classList.add("active");
    }
});


const topButton = document.createElement("button");

topButton.textContent = "^";
topButton.className = "top-button";
topButton.setAttribute("aria-label", "Повернутися нагору");

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
    topButton.classList.toggle("visible", window.scrollY > 300);
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});






const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const links = menu.querySelectorAll("a");


btn.addEventListener("click", () => {
    menu.classList.toggle("open");

    if (menu.classList.contains("open")) {
        btn.textContent = "✕";
        btn.setAttribute("aria-expanded", "true");
    } else {
        btn.textContent = "☰";
        btn.setAttribute("aria-expanded", "false");
    }
});

links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("open");
        btn.textContent = "☰";
        btn.setAttribute("aria-expanded", "false");
    });
});
