function toggleMenu() {
    const navItems = document.querySelectorAll('.nav-items');
    const hamburger = document.querySelector('.hamburger');
    navItems.forEach(menu => menu.classList.toggle('active'));
    hamburger.classList.toggle('active');
}