const navbar = function (event) {
  const header = document.querySelector(".header");
  const subtitle = document.querySelector(".subtitle");
  const footer = document.querySelector(".footer");

  const subtitleOptions = {
    rootMargin: "-100px 0px 0px 0px",
  };
  const footerOptions = {
    // threshold: "0.8",
    // rootMargin: "-1500px 0px 0px 0px",
  };

  const subtitleObserver = new IntersectionObserver(
    (entries, subtitleObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          header.classList.add("transparency");
        } else {
          header.classList.remove("transparency");
        }
      });
    },
    subtitleOptions
  );

  const footerObserver = new IntersectionObserver(
    (entries, subtitleObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          header.classList.add("invisible");
          console.log("in", entry.intersectionRatio);
        } else {
          header.classList.remove("invisible");
          console.log("out", entry.intersectionRatio);
        }
      });
    },
    footerOptions
  );

  subtitleObserver.observe(subtitle);
  // footerObserver.observe(footer);
};

// window.onload = navbar;

module.exports = navbar;
