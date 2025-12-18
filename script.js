// Animate skill bars when the skills section enters view
const skillBars = document.querySelectorAll(".skill-bar div");
const skillsSection = document.getElementById("skills");

function fillBars() {
  const rect = skillsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    skillBars.forEach((bar) => {
      const target = bar.getAttribute("data-width");
      bar.style.width = target + "%";
    });
    window.removeEventListener("scroll", fillBars);
  }
}

window.addEventListener("scroll", fillBars);
fillBars(); // run once in case already visible

// Smooth scroll for nav links (in case some browsers ignore CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Always start in dark mode

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLightMode = body.classList.contains('light-mode');

  // Update icon
  if (isLightMode) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
});

// Typing effect for hero title
const typingText = document.getElementById('typing-text');
const text = "Hiii I'm Preet Raut";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Adjust speed here (100ms per character)
  }
}

// Start typing effect when page loads
window.addEventListener('load', typeWriter);

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.navbar nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Close menu when clicking on a nav link (for mobile)
document.querySelectorAll('.navbar nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// Email validation for contact form
const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', (e) => {
  const emailInput = document.querySelector('#contact input[type="email"]');
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    e.preventDefault();
    alert('Please enter a valid email address.');
    emailInput.focus();
  } else {
    e.preventDefault(); // Prevent actual submission since no backend
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'flex';
    contactForm.reset();
    // Hide the message after 5 seconds
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 5000);
  }
});
