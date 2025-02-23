// Theme Switcher
const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

themeSwitch.addEventListener('change', switchTheme);

// Check for saved theme in localStorage on page load
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    if (currentTheme === 'dark') {
        themeSwitch.checked = true;
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        themeSwitch.checked = false;
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission
document.querySelector('.contact-form form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // You can handle form submission here, for example using Fetch API or XMLHttpRequest.
    // For now, we'll just show an alert.
    
    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;
    
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // You would typically send the form data to the server here.
        this.reset(); // Reset the form after submission
    } else {
        alert('Please fill in all fields.');
    }
});
