
document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded - RSVP script running");

  const toggleButton = document.getElementById("theme-toggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      toggleButton.textContent = document.body.classList.contains("light-mode")
        ? "Dark Mode"
        : "Light Mode";
    });
  }

  const form = document.getElementById("rsvpForm");
  const list = document.getElementById("rsvpList");

  if (!form || !list) {
    console.error("RSVP form or list not found!");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("gamerName").value.trim();
    const state = document.getElementById("homeState").value.trim();

    if (name && state) {
      const newLi = document.createElement("li");
      newLi.textContent = `${name} from ${state} is joining the crew.`;
      list.prepend(newLi);

      form.reset();
      document.getElementById("gamerName").focus();
    }
  });
});