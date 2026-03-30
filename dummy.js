// const themeToggle = document.getElementById('theme-toggle');
// const hamburger = document.getElementById('hamburger');
// const navLinks = document.getElementById('nav-links');

// // 1. Dark Mode Logic
// const currentTheme = localStorage.getItem('theme') || 'light';
// document.documentElement.setAttribute('data-theme', currentTheme);

// themeToggle.addEventListener('click', () => {
//   let theme = document.documentElement.getAttribute('data-theme');
//   let newTheme = theme === 'light' ? 'dark' : 'light';
  
//   document.documentElement.setAttribute('data-theme', newTheme);
//   localStorage.setItem('theme', newTheme);
// });

// // 2. Hamburger Menu Logic
// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });
// const headers = document.querySelector('header');

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 50) {
//     headers.classList.add('header-scrolled');
//   } else {
//     headers.classList.remove('header-scrolled');
//   }
// });
// // --- Theme Toggle Logic ---
// const themeToggles = document.getElementById('theme-toggle'); // Ensure your header button has this ID
// const htmlElement = document.documentElement;

// // Check for saved theme
// const savedTheme = localStorage.getItem('theme') || 'light';
// htmlElement.setAttribute('data-theme', savedTheme);

// if(themeToggle) {
//     themeToggle.addEventListener('click', () => {
//         const currentTheme = htmlElement.getAttribute('data-theme');
//         const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
//         htmlElement.setAttribute('data-theme', newTheme);
//         localStorage.setItem('theme', newTheme);
//     });
// }

// // --- Sticky Header Shadow on Scroll ---
// const header = document.querySelector('header');
// window.addEventListener('scroll', () => {
//     if (window.scrollY > 20) {
//         header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
//     } else {
//         header.style.boxShadow = "none";
//     }
// });

// // --- Simple Reveal Animation ---
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.opacity = "1";
//             entry.target.style.transform = "translateY(0)";
//         }
//     });
// }, { threshold: 0.1 });

// document.querySelectorAll('.reveal').forEach(el => {
//     el.style.opacity = "0";
//     el.style.transform = "translateY(20px)";
//     el.style.transition = "0.6s ease-out";
//     observer.observe(el);
// });
/**
 * FUTURELINK CAREER PORTAL - CORE LOGIC
 * Includes: Theme Toggle, Mobile Menu, and Scroll Animations
 */


// const htmlElement = document.documentElement;
// const themeToggleButton = document.getElementById('theme-toggle');
// const hamburgerMenu = document.getElementById('hamburger');
// const mobileNavLinks = document.getElementById('nav-links');
// const stickyHeader = document.querySelector('header');
// const revealElements = document.querySelectorAll('.reveal');


// const initializeTheme = () => {
//     const savedTheme = localStorage.getItem('portal-theme') || 'light';
//     htmlElement.setAttribute('data-theme', savedTheme);
// };

// const toggleTheme = () => {
//     const currentTheme = htmlElement.getAttribute('data-theme');
//     const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
//     htmlElement.setAttribute('data-theme', newTheme);
//     localStorage.setItem('portal-theme', newTheme);
// };

// const toggleMobileMenu = () => {
//     mobileNavLinks.classList.toggle('active');

//     hamburgerMenu.classList.toggle('is-open');
// };

// const handleHeaderScroll = () => {

//     if (window.scrollY > 20) {
//         stickyHeader.classList.add('header-scrolled');
//     } else {
//         stickyHeader.classList.remove('header-scrolled');
//     }
// };


// const scrollObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('is-visible');
//         }
//     });
// }, { threshold: 0.15 });




// document.addEventListener('DOMContentLoaded', () => {
//     initializeTheme();
    
 
//     if (themeToggleButton) {
//         themeToggleButton.addEventListener('click', toggleTheme);
//         mobileNavLinks.style.display = "block";
//     }

//     if (hamburgerMenu) {
//         hamburgerMenu.addEventListener('click', toggleMobileMenu);
//     }


//     window.addEventListener('scroll', handleHeaderScroll);


//     revealElements.forEach(element => scrollObserver.observe(element));
// });


  const htmlElement = document.documentElement;
  const themeToggleButton = document.getElementById('theme-toggle');
  const hamburgerMenu = document.getElementById('hamburger');
  const mobileNavLinks = document.getElementById('nav-links');
  const stickyHeader = document.querySelector('header');
 
  // ── THEME ──
  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('portal-theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
  };
 
  const toggleTheme = () => {
    const newTheme = htmlElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portal-theme', newTheme);
  };
 
  // ── HAMBURGER ──
  const toggleMobileMenu = () => {
    const isOpen = mobileNavLinks.classList.toggle('active');
    hamburgerMenu.classList.toggle('is-open', isOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };
 
  const closeMobileMenu = () => {
    mobileNavLinks.classList.remove('active');
    hamburgerMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  };
 
  // ── SCROLL ──
  const handleHeaderScroll = () => {
    stickyHeader.classList.toggle('header-scrolled', window.scrollY > 20);
  };
 
  // ── INIT ──
  document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
 
    themeToggleButton.addEventListener('click', toggleTheme);
 
    hamburgerMenu.addEventListener('click', toggleMobileMenu);
 
    // Keyboard accessibility for hamburger
    hamburgerMenu.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') toggleMobileMenu();
    });
 
    // Close menu when a nav link is clicked (good UX on mobile)
    mobileNavLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
 
    // Close menu on resize back to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) closeMobileMenu();
    });
 
    window.addEventListener('scroll', handleHeaderScroll);
  });