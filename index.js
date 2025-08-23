const toggleButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-item');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('show'); // Close navbar on link click
  });
});


const textArray = ["Web Developer", "Freelancer", "Aws Cloud Engineer", "Digital Marketing","Java Full stack","Application Developer"];
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(erase, 2000);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
      } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, 500);
      }
    }

    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(type, 1000);
    });

 const form = document.getElementById("contact-form");

  form.addEventListener("submit", async function(e) {
    e.preventDefault(); // stop normal form submit

    let response = await fetch(this.action, {
      method: this.method,
      body: new FormData(this),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert("✅ Message sent successfully!");
      form.reset(); // <-- clears all inputs & textarea
    } else {
      alert("❌ Oops! Something went wrong. Try again.");
    }
  });