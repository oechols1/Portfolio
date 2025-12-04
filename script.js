// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Animations
const heroTimeline = gsap.timeline();

heroTimeline
    .from('.logo', {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        clearProps: "all"
    })
    .from('.nav-links li', {
        y: -20,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "all"
    }, "-=0.8")
    .from('.nav-btn', {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        clearProps: "all"
    }, "-=0.8")
    .from('.hero-title', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        clearProps: "all"
    }, "-=0.6")
    .from('.hero-description', {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        clearProps: "all"
    }, "-=1")
    .from('.hero-buttons .btn', {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        clearProps: "all"
    }, "-=1")
    .from('.image-wrapper', {
        y: 40,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        clearProps: "all"
    }, "-=1")
    .from('.scroll-indicator', {
        opacity: 0,
        duration: 1,
        delay: 0.5,
        clearProps: "all"
    }, "-=0.5");

// Skills Banner Infinite Loop Animation
const skillsTrack = document.querySelector('.skills-track');
if (skillsTrack) {
    const skillsGroup = document.querySelector('.skills-group');
    const skillsWidth = skillsGroup.offsetWidth + 32; // width + gap (2rem = 32px)

    gsap.to(skillsTrack, {
        x: -skillsWidth,
        duration: 20,
        ease: "none",
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % skillsWidth)
        }
    });
}

// Scroll Animations

// About Section
// About Section
if (document.querySelector('.about-section')) {
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });
}

// Projects Section
gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: i * 0.1 // Stagger effect
    });
});

// Contact Section
gsap.from('.contact-container', {
    scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 40,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

// Hide Scroll Indicator on Scroll
gsap.to('.scroll-indicator', {
    scrollTrigger: {
        trigger: '.hero-section',
        start: "top top",
        end: "200px top",
        scrub: true
    },
    opacity: 0
});
