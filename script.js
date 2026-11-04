fetch("events.json")
  .then((response) => response.json())
  .then((events) => {
   const list = document.querySelector("#starred");
const status = document.querySelector("#status");

const renderEvents = (events) => {
  if (!Array.isArray(events)) {
    throw new TypeError("Expected events.json to contain an array.");
  }

  list.innerHTML = "";

  events.forEach((event) => {
    const item = document.createElement("li");
    item.textContent = `${event.name} — starred ${event.starred}`;
    list.appendChild(item);
  });
};

fetch("events.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    return response.json();
  })
  .then((events) => {
    renderEvents(events);
  })
  .catch((error) => {
    console.error("Failed to load starred repos:", error);
    status.textContent = "Unable to load the star log right now.";
    list.innerHTML = "";
  });
  });