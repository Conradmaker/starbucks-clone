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
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", () => {
  searchInputEl.focus();
});
searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInputEl.removeAttribute("placeholder", "통합검색");
});

const badgeEl = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  utils.throttle(() => {
    const scrollTop =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.documentElement.scrollTop;

    scrollTop > 500
      ? gsap.to(badgeEl, 0.6, {
          opacity: 0,
          display: "none",
        })
      : gsap.to(badgeEl, 0.6, {
          opacity: 1,
          display: "block",
        });
  }, 300)
);
