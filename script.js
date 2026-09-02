const weddingDate = new Date("2026-10-25T14:00:00+03:00");

const counters = {
  days: document.querySelector('[data-unit="days"]'),
  hours: document.querySelector('[data-unit="hours"]'),
  minutes: document.querySelector('[data-unit="minutes"]'),
  seconds: document.querySelector('[data-unit="seconds"]')
};

function formatUnit(value) {
  return String(Math.max(0, value)).padStart(2, "0");
}

function updateCountdown() {
  const delta = weddingDate.getTime() - Date.now();

  if (delta <= 0) {
    counters.days.textContent = "00";
    counters.hours.textContent = "00";
    counters.minutes.textContent = "00";
    counters.seconds.textContent = "00";
    return;
  }

  const days = Math.floor(delta / (1000 * 60 * 60 * 24));
  const hours = Math.floor((delta / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((delta / (1000 * 60)) % 60);
  const seconds = Math.floor((delta / 1000) % 60);

  counters.days.textContent = formatUnit(days);
  counters.hours.textContent = formatUnit(hours);
  counters.minutes.textContent = formatUnit(minutes);
  counters.seconds.textContent = formatUnit(seconds);
}

updateCountdown();
window.setInterval(updateCountdown, 1000);
document.documentElement.classList.add("js");

const revealItems = document.querySelectorAll(
  ".section__inner > *, .marquee-strip"
);

revealItems.forEach((item) => {
  item.classList.add("reveal-item");
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
const rsvpForm = document.getElementById("rsvp-form");
const rsvpSuccess = document.getElementById("rsvp-success");

rsvpForm.addEventListener("submit", function (event) {
  event.preventDefault();

  rsvpSuccess.classList.add("visible");
  rsvpForm.reset();
});
