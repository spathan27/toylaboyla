document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".toy-grid");
  
    fetch("toys/viral.json")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((toy) => {
          const card = document.createElement("div");
          card.className = "toy-card";
          card.innerHTML = `
            <img src="${toy.image}" alt="${toy.title}">
            <div class="toy-title">${toy.title}</div>
            <p>${toy.description}</p>
            <a href="${toy.link}" target="_blank" class="buy-button">Buy Now</a>
          `;
          container.appendChild(card);
        });
      })
      .catch((error) => {
        container.innerHTML = `<p>Failed to load viral toys. Please try again later.</p>`;
        console.error("Error loading toys:", error);
      });
  });
  