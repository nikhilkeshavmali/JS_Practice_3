const throttleFunction = (func, delay) => {
  let prev = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

document.querySelector("#center").addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    // Create the container div
    let div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";

    // Create the image
    let img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://tse1.mm.bing.net/th?id=OIP.Cf5b0b3f-1e4c-4a7e-8f3d-4e5f6d2e3c2a&pid=Api&P=0"
    );

    // Append image to div and div to body
    div.appendChild(img);
    document.body.appendChild(div);

    // Animate image reveal
    gsap.to(img, {
      y: 0,
      ease: "power1.out",
      duration: 0.6,
    });

    // Animate image exit
    gsap.to(img, {
      y: "100%",
      delay: 0.6,
      ease: "power2.inOut",
    });

    // Remove div after animation
    setTimeout(() => {
      div.remove();
    }, 2000);
  }, 400)
);
