   // Smooth scrolling for navigation links
   document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Display message when Contact section is clicked
document.querySelector('#contact').addEventListener('click', function() {
    alert('Thank you for your interest! Please feel free to reach out.');
});
