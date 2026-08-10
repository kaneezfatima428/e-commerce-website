// GSAP Plugins Registration
gsap.registerPlugin(ScrollTrigger, TextPlugin);

document.addEventListener("DOMContentLoaded", function () {

    // 1. Navbar Reveal Animation
    var navTl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    
    navTl.from(".navbar", {
        y: -90,
        opacity: 0
    })
    .from(".navbar-brand", {
        x: -30,
        opacity: 0,
        duration: 0.8
    }, "-=0.5")
    .from(".nav-item", {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6
    }, "-=0.6")
    .from(".fa-bag-shopping", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(2)"
    }, "-=0.4");

    // 2. Hero Section Entrance Elements Sequence
    var heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    heroTl.from(".hero-section .text-warning", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2
    })
    .from(".hero-section p", {
        y: 30,
        opacity: 0,
        duration: 1
    }, "-=0.4")
    .from(".hero-section .btn", {
        y: 20,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.7)"
    }, "-=0.6");

    // Continuous Infinite Typewriter Loop Animation
    var typewriterTl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    typewriterTl
        .to(".hero-section h1", {
            duration: 2.2,
            text: "Refine Your Style",
            ease: "none"
        })
        .to({}, { duration: 2 }) // Pause at full text
        .to(".hero-section h1", {
            duration: 1.2,
            text: "",
            ease: "none"
        });

    // 3. Featured Section Line Animation
    gsap.from(".section-line", {
        scrollTrigger: {
            trigger: ".section-line",
            start: "top 85%"
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // 4. Category Filter Buttons Stagger
    gsap.from(".btn-outline-warning", {
        scrollTrigger: {
            trigger: ".btn-outline-warning",
            start: "top 90%"
        },
        y: 30,
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.08,
        ease: "back.out(1.7)"
    });

    // 5. Initial Cards Animate Trigger
    animateProductCards();

    // 6. Footer Scroll Animation
    gsap.from("footer .col-md-6", {
        scrollTrigger: {
            trigger: "footer",
            start: "top 90%"
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    setupInteractiveAnimations();
});

// Reusable Function: Cards Scroll-Driven Stagger Entrance
function animateProductCards() {
    var cards = document.querySelectorAll("#products-container .col");
    
    if (cards.length > 0) {
        cards.forEach(function(card) {
            gsap.fromTo(card, 
                { 
                    y: 80, 
                    opacity: 0, 
                    scale: 0.88,
                    filter: "blur(8px)"
                }, 
                { 
                    y: 0, 
                    opacity: 1, 
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 1.1, 
                    ease: "power3.out",
                    clearProps: "filter",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 92%",
                        toggleActions: "play none none reverse"
                    },
                    onComplete: function() {
                        bindCardGSAPHover();
                    }
                }
            );
        });
    }
}

// GSAP Magnetic 3D Tilt & Card Hover Effects
function bindCardGSAPHover() {
    var cards = document.querySelectorAll(".product-card");

    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];

        card.addEventListener("mouseenter", function (e) {
            var targetCard = e.currentTarget;
            var targetImg = targetCard.querySelector(".img-wrapper img");
            var targetOverlay = targetCard.querySelector(".cart-overlay");

            gsap.to(targetCard, {
                y: -10,
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(188, 156, 34, 0.25)",
                borderColor: "rgba(188, 156, 34, 0.6)",
                duration: 0.4,
                ease: "power2.out"
            });

            if (targetImg) {
                gsap.to(targetImg, {
                    scale: 1.08,
                    filter: "brightness(1.1)",
                    duration: 0.5,
                    ease: "power2.out"
                });
            }

            if (targetOverlay) {
                gsap.to(targetOverlay, {
                    bottom: 0,
                    duration: 0.4,
                    ease: "back.out(1.4)"
                });
            }
        });

        card.addEventListener("mousemove", function (e) {
            var rect = e.currentTarget.getBoundingClientRect();
            var x = e.clientX - rect.left - rect.width / 2;
            var y = e.clientY - rect.top - rect.height / 2;

            gsap.to(e.currentTarget, {
                rotationY: x * 0.05,
                rotationX: -y * 0.05,
                transformPerspective: 1000,
                ease: "power1.out",
                duration: 0.2
            });
        });

        card.addEventListener("mouseleave", function (e) {
            var targetCard = e.currentTarget;
            var targetImg = targetCard.querySelector(".img-wrapper img");
            var targetOverlay = targetCard.querySelector(".cart-overlay");

            gsap.to(targetCard, {
                y: 0,
                scale: 1,
                rotationX: 0,
                rotationY: 0,
                boxShadow: "0 0 0px rgba(0,0,0,0)",
                borderColor: "rgba(255, 255, 255, 0.05)",
                duration: 0.5,
                ease: "power2.out"
            });

            if (targetImg) {
                gsap.to(targetImg, {
                    scale: 1,
                    filter: "brightness(0.95)",
                    duration: 0.5,
                    ease: "power2.out"
                });
            }

            if (targetOverlay) {
                gsap.to(targetOverlay, {
                    bottom: -65,
                    duration: 0.3,
                    ease: "power2.in"
                });
            }
        });
    }
}

// UI Micro Animations
function setupInteractiveAnimations() {
    var cartTrigger = document.querySelector('[data-bs-target="#cartModal"]');
    if (cartTrigger) {
        cartTrigger.addEventListener("click", function () {
            gsap.fromTo(this, 
                { scale: 0.8 }, 
                { scale: 1, duration: 0.5, ease: "elastic.out(1.2, 0.4)" }
            );
        });
    }

    var cartModal = document.getElementById("cartModal");
    if (cartModal) {
        cartModal.addEventListener("shown.bs.modal", function () {
            gsap.from("#cartModal .modal-content", {
                y: -40,
                opacity: 0,
                scale: 0.95,
                duration: 0.4,
                ease: "power3.out"
            });
        });
    }

    var checkoutModal = document.getElementById("checkoutModal");
    if (checkoutModal) {
        checkoutModal.addEventListener("shown.bs.modal", function () {
            gsap.from("#checkoutModal .modal-content", {
                y: -40,
                opacity: 0,
                scale: 0.95,
                duration: 0.4,
                ease: "power3.out"
            });
            gsap.from("#checkoutModal .mb-3, #checkoutModal .mb-4", {
                x: -20,
                opacity: 0,
                duration: 0.4,
                stagger: 0.08,
                ease: "power2.out"
            });
        });
    }
}