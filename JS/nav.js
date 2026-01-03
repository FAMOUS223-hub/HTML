// Navbar toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('.primary-navbar ul');
    const navLinks = document.querySelectorAll('.primary-navbar ul li a');
    const closeIcon = document.querySelector('.close-icon');
    const hamburgerIcon = document.querySelector('.fa-bars');

    if (hamburger && navUl) {
        hamburger.addEventListener('click', function() {
            navUl.classList.toggle('show');
            if (navUl.classList.contains('show')) {
                closeIcon.style.display = 'block';
                hamburgerIcon.style.display = 'none';
            } else {
                closeIcon.style.display = 'none';
                hamburgerIcon.style.display = 'block';
            }
        });
    }

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (navUl.classList.contains('show')) {
                navUl.classList.remove('show');
                closeIcon.style.display = 'none';
                hamburgerIcon.style.display = 'block';
            }
        });
    });
});