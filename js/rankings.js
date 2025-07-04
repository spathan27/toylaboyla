document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".toy-grid");
  
    fetch("toys/rankings.json")
      .then(res => res.json())
      .then(data => {
        data.forEach(toy => {
          const card = document.createElement("div");
          card.className = "toy-card";
          card.innerHTML = `
            <div class="ranking-badge">#${toy.rank}</div>
            <img src="${toy.image}" alt="${toy.title}">
            <div class="toy-title">${toy.title}</div>
            <p>${toy.description}</p>
            <p><strong>${toy.price}</strong></p>
            <a href="${toy.link}" target="_blank" class="buy-button">Buy Now</a>
          `;
          container.appendChild(card);
        });
      })
      .catch(err => {
        container.innerHTML = "<p>Failed to load rankings. Please try again later.</p>";
        console.error("Error loading rankings:", err);
      });
  });
  