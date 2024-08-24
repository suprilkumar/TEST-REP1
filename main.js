  // JavaScript to handle Nav-dropdown and Menu bar
  document.getElementById('menu-button').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

document.getElementById('profile-button').addEventListener('click', function () {
    const dropdown = document.getElementById('profile-dropdown');
    dropdown.classList.toggle('hidden');
});

// JavaScript to handle accordion toggle
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        button.querySelector('.accordion-icon').classList.toggle('rotate-180');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});


// Change navbar opacity on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.classList.remove('nav-transparent');
        navbar.classList.add('nav-opaque');
    } else {
        navbar.classList.remove('nav-opaque');
        navbar.classList.add('nav-transparent');
    }
});

 // JavaScript to handle tab switching
 function openTab(evt, tabName) {
    // Hide all tab content
    var tabContent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Remove the active class from all tab buttons
    var tabLinks = document.getElementsByClassName("tab-link");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab and add an active class to the clicked tab button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}