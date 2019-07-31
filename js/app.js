const navButton = document.querySelector(".nav-button");
const navOpen = document.querySelector(".nav-open");

const timeline = new TimelineLite({ paused: true, reversed: true });

timeline
  .to(".cover", 1, {
    width: "60%",
    ease: Power2.easeOut
  })
  .to(
    "nav",
    1,
    {
      height: "100%",
      ease: Power2.easeOut
    },
    "-=0.5"
  )
  .fromTo(
    ".nav-open",
    0.5,
    // starts 50px to the right and with no opacity
    {
      opacity: 0,
      x: 50,
      ease: Power2.easeOut
    },
    // ends at 0px to the left and with full opacity
    {
      opacity: 1,
      x: 0,
      // runs when animation finishes
      onComplete: function() {
        navOpen.style.pointerEvents = "auto";
        console.log("done");
      }
    }
  );

navButton.addEventListener("click", () => {
  // allows another click after the animation finishes
  if (timeline.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }

  toggleTween(timeline);
});

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}
