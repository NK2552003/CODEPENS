document.addEventListener("DOMContentLoaded", () => {
  const me = document.querySelector(".me");
  const earRight = document.querySelector(".ear-right");
  const earLeft = document.querySelector(".ear-left");
  const head = document.querySelector(".head");
  const hair = document.querySelector(".hair");
  const shadow = document.querySelector(".shadow");
  const glasses = document.querySelector(".glasses");
  const eyebrowRight = document.querySelector(".eyebrow-right");
  const eyebrowLeft = document.querySelector(".eyebrow-left");
  const eyeRight = document.querySelector(".eye-right");
  const eyeLeft = document.querySelector(".eye-left");
  const eyeRight2 = document.querySelector(".eye-right-2");
  const eyeLeft2 = document.querySelector(".eye-left-2");

  // Initial animation
  me.animate(
    [
      { opacity: 0, transform: "translateY(100%)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      fill: "forwards",
      delay: 500
    }
  );

  [head, hair, shadow].forEach((el) => {
    el.animate(
      [{ transform: "translateY(20%)" }, { transform: "translateY(0)" }],
      {
        duration: 900,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        fill: "forwards",
        delay: 600
      }
    );
  });

  // earRight.animate(
  //   [
  //     { transform: "rotate(40deg) translateY(10%) translateX(5%)" },
  //     { transform: "rotate(0) translateY(0) translateX(0)" },
  //   ],
  //   {
  //     duration: 1000,
  //     easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  //     fill: "forwards",
  //     delay: 700,
  //   }
  // );

  // earLeft.animate(
  //   [
  //     { transform: "rotate(-40deg) translateY(10%) translateX(-5%)" },
  //     { transform: "rotate(0) translateY(0) translateX(0)" },
  //   ],
  //   {
  //     duration: 1000,
  //     easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  //     fill: "forwards",
  //     delay: 700,
  //   }
  // );

  glasses.animate(
    [{ transform: "translateY(-10%)" }, { transform: "translateY(0)" }],
    {
      duration: 1000,
      easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      fill: "forwards",
      delay: 750
    }
  );

  [eyebrowRight, eyebrowLeft].forEach((el) => {
    el.animate(
      [{ transform: "translateY(300%)" }, { transform: "translateY(0)" }],
      {
        duration: 1000,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        fill: "forwards"
        // delay: 700,
      }
    );
  });

  [eyeRight, eyeLeft].forEach((el) => {
    el.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 10,
      fill: "forwards",
      delay: 850
    });
  });

  [eyeRight2, eyeLeft2].forEach((el) => {
    el.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 10,
      fill: "forwards",
      delay: 850
    });
  });

  // Blinking animation
  function blink() {
    const blinkAnimation = [
      { opacity: 1 },
      { opacity: 0, offset: 0.5 },
      { opacity: 1 }
    ];

    [eyeRight, eyeLeft].forEach((el) => {
      el.animate(blinkAnimation, {
        duration: 150,
        iterations: 1
      });
    });

    [eyeRight2, eyeLeft2].forEach((el) => {
      el.animate(blinkAnimation.reverse(), {
        duration: 150,
        iterations: 1
      });
    });

    setTimeout(blink, Math.random() * 5000 + 2000);
  }

  setTimeout(blink, 1000);

  // Mouse move animation
  const face = document.querySelector(".face");
  const innerFace = document.querySelector(".inner-face");
  const hairFront = document.querySelector(".hair-front");
  const hairBack = document.querySelector(".hair-back");
  const ear = document.querySelectorAll(".ear");

  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    const moveX = (mouseX - 0.5) * 5;
    const moveY = (mouseY - 0.5) * 5;

    face.style.transform = `translate(${moveX / 3}%, ${moveY / 3}%)`;
    innerFace.style.transform = `translate(${moveX / 4}%, ${moveY / 4}%)`;
    hairFront.style.transform = `translate(${moveX / 5}%, ${moveY / 5}%)`;
    hairBack.style.transform = `translate(${-moveX / 15}%, ${
      -moveY / 15
    }%) rotate(${moveX / 50}deg)`;
    ear.forEach((el, index) => {
      const direction = index === 0 ? -1 : 1;
      el.style.transform = `translate(${-moveX / 8}%, ${-moveY / 8}%) rotate(${
        (direction * moveX) / 25
      }deg)`;
    });
    [eyebrowRight, eyebrowLeft].forEach((el) => {
      el.style.transform = `translateY(${moveY * 2.5}%)`;
    });
  });

  window.onload = function () {
    const avatar = document.querySelector(".me");
    avatar.style.animationDelay = "0s"; // Start immediately after load
    avatar.style.opacity = "1"; // Ensure it's visible
  };
});
