function showSection(id) {
    document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
    const section = document.getElementById(id);
    if(section) section.classList.add("active");

    // Update URL hash
    history.pushState(null, null, `#${id}`);
}

// Detect hash change on back/forward buttons
window.addEventListener("hashchange", () => {
    const hash = location.hash.replace("#", "");
    if(hash) showSection(hash);
});

// Load initial section
window.onload = () => {
    const hash = location.hash.replace("#", "");
    if(hash) showSection(hash);
    else showSection('home');
};