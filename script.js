document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const images = gsap.utils.toArray(".section img");
    const text = document.querySelector(".text");
    const getResponsiveValues = () => {
        return window.innerWidth < 501 ? { dx: "200vw", dy: "220vh" } : window.innerWidth < 901 ? { dx: "170vw", dy: "150vh" } : { dx: "140vw", dy: "120vh" }
    }
    const { dx, dy } = getResponsiveValues();

    gsap.timeline({
        scrollTrigger: {
            trigger: ".section",
            start: "top top",
            pin: true,
            scrub: 3,
            end: `+=${images.length * 80}%`
        }
    }).to(".section img", {
        x: dx,
        y: dy,
        rotate: -30,
        stagger: 0.07,
        ease: "power2.inOut"
    })
    const textScroll = () => -window.innerWidth - text.offsetWidth;

    gsap.timeline({ repeat: -1, defaults: { ease: "linear" } }).to(text, {
        x: textScroll,
        duration: 20
    }).set(text, {
        x: window.innerWidth / 10
    }).to(text, { x: textScroll, duration: 20 })
})