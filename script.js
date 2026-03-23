const cakes = [
    {
        img: "images/cake1.jpg",
        title: "Chocolate Cake",
        desc: "Rich and creamy chocolate delight."
    },
    {
        img: "images/cake2.jpg",
        title: "Birthday Cakes",
        desc: "Perfect cakes for celebrations."
    },
    {
        img: "images/cake3.jpg",
        title: "Cupcakes",
        desc: "Sweet and colorful mini cakes."
    }
];

// Run after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("cakeContainer");

    if (container) {
        let output = "";

        for (let i = 0; i < cakes.length; i++) {
            output += `
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card">
                        <img src="${cakes[i].img}" alt="${cakes[i].title}">
                        <h3 class="p-2">${cakes[i].title}</h3>
                        <p class="p-2">${cakes[i].desc}</p>
                    </div>
                </div>
            `;
        }

        container.innerHTML = output;
    }

    // Load initial section
    const hash = location.hash.replace("#", "");
    if (hash) showSection(hash);
    else showSection('home');
});
const heroItems = [
    {
        icon: "🎂",
        title: "Custom Cakes",
        desc: "Made-to-order cakes for birthdays & events."
    },
    {
        icon: "🧁",
        title: "Cupcakes",
        desc: "Delicious mini treats in various flavors."
    },
    {
        icon: "🍰",
        title: "Pastries",
        desc: "Fresh pastries baked daily."
    }
];

document.addEventListener("DOMContentLoaded", () => {

    const heroContainer = document.getElementById("heroContainer");

    if (heroContainer) {
        let output = "";

        for (let i = 0; i < heroItems.length; i++) {
            output += `
                <div class="col-12 col-md-4">
                    <div class="hero-card">
                        <div class="icon">${heroItems[i].icon}</div>
                        <h3>${heroItems[i].title}</h3>
                        <p>${heroItems[i].desc}</p>
                    </div>
                </div>
            `;
        }

        heroContainer.innerHTML = output;
    }

});
function showSection(id) {
    document.querySelectorAll("section").forEach(s => s.classList.remove("active"));

    const section = document.getElementById(id);
    if (section) section.classList.add("active");

    // Update URL hash
    history.pushState(null, null, `#${id}`);
}

// Detect hash change (back/forward)
window.addEventListener("hashchange", () => {
    const hash = location.hash.replace("#", "");
    if (hash) showSection(hash);
});