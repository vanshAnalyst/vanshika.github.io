// ...existing code...

// Section reveal animation on scroll
function revealSections() {
  document.querySelectorAll('.section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.section').forEach(section => section.classList.add('visible'));
  revealSections();
});

// Interactive hover for skill tags, project cards, and certification cards
document.querySelectorAll('.course-pill, .footer-skill-tag, .tech-tag').forEach(tag => {
  tag.addEventListener('mouseenter', () => tag.classList.add('active'));
  tag.addEventListener('mouseleave', () => tag.classList.remove('active'));
});

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => card.classList.add('active'));
  card.addEventListener('mouseleave', () => card.classList.remove('active'));
});

document.querySelectorAll('.cert-card').forEach(card => {
  card.addEventListener('mouseenter', () => card.classList.add('active'));
  card.addEventListener('mouseleave', () => card.classList.remove('active'));
});

particlesJS('particles-js', {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    color: { value: "#4a9eff" },
    line_linked: { enable: true, color: "#9d4edd" },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } }
  }
});

particlesJS('education-particles', {
  particles: {
    number: { value: 80 },
    color: { value: "#9d4edd" },
    shape: { type: "circle" },
    opacity: { value: 0.3 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 0.6,
      direction: "top",
      out_mode: "out"
    }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "bubble" } },
    modes: {
      bubble: { distance: 100, size: 5, duration: 2, opacity: 0.8 }
    }
  }
});

// Filter certifications interactively
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const filter = this.dataset.filter;
    document.querySelectorAll('.cert-card').forEach(card => {
      if (filter === 'all' ||
          card.dataset.year === filter ||
          card.dataset.provider === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Contact Form Handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            if (name && email && subject && message) {
                // Show success message (replace with actual form submission)
                alert('Thank you for your message! I\'ll get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });

        // Scroll to Top Button
        const scrollToTopBtn = document.getElementById('scrollToTop');
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Smooth scrolling for footer links
        document.querySelectorAll('.footer-links a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form field animations
        document.querySelectorAll('.form-group input, .form-group textarea').forEach(field => {
            field.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            field.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
        });

function animateFooterSkills() {
  const categories = document.querySelectorAll('.skills-category');
  let indices = Array(categories.length).fill(0);

  function cycleSkills() {
    categories.forEach((cat, i) => {
      const skills = cat.querySelectorAll('.footer-skill-tag');
      skills.forEach(skill => skill.classList.remove('active'));
      if (skills.length) {
        skills[indices[i] % skills.length].classList.add('active');
      }
      indices[i] = (indices[i] + 1) % skills.length;
    });
  }

  function isSkillsSectionVisible() {
    const section = document.getElementById('skills');
    if (!section) return false;
    const rect = section.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  setInterval(() => {
    if (isSkillsSectionVisible()) {
      cycleSkills();
    }
  }, 900); // Adjust speed as needed
}

window.addEventListener('DOMContentLoaded', animateFooterSkills);


// Animate skill pills once when the skills section is visible
function animateSkillPillsOnce() {
  const skillBlocks = document.querySelectorAll('.skill-block');
  let animated = false;

  function animate() {
    if (animated) return;
    const section = document.getElementById('skills');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      animated = true;
      skillBlocks.forEach((block, i) => {
        const pills = block.querySelectorAll('.skill-pill');
        pills.forEach(pill => pill.classList.remove('active'));
        pills.forEach((pill, idx) => {
          setTimeout(() => {
            pill.classList.add('active');
            setTimeout(() => pill.classList.remove('active'), 600);
          }, idx * 700);
        });
      });
    }
  }

  window.addEventListener('scroll', animate);
  window.addEventListener('DOMContentLoaded', animate);
}

animateSkillPillsOnce();