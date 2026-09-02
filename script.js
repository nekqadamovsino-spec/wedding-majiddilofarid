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
