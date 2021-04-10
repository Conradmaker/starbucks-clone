const utils = {
  throttle: (callback, time) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          callback(...args);
          throttled = false;
        }, time);
      }
    };
  },
  debounce: (callback, time) => {
    let timeoutId;

    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(callback.bind(null, ...args), time);
    };
  },
};

const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  utils.throttle(() => {
    const scrollTop =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    if (scrollTop > 500) {
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);

toTopEl.addEventListener("click", () => {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((el, index) => {
  gsap.to(el, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  isHidePromotion
    ? promotionEl.classList.add("hide")
    : promotionEl.classList.remove("hide");
});
const makeRandomNumber = (min, max) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
};
const floatingObject = (selector, delay, size) => {
  // gsap.to(요소,시간,옵션)
  gsap.to(selector, makeRandomNumber(1.5, 2.5), {
    y: size,
    repeat: -1, //무한
    yoyo: true, //뒤로재생
    ease: Power1.easeInOut,
    delay: makeRandomNumber(0, delay),
  });
};
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐 여부 감시할 요소
    triggerHook: 0.8, //viewport의 .8높이에 걸리면 setClassToggle()
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
