document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".blog-grid");

  fetch("blog.json")
    .then(res => res.json())
    .then(posts => {
      // Sort by date descending (newest first)
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      posts.forEach(post => {
        const card = document.createElement("div");
        card.className = "blog-card";
        card.innerHTML = `
          <h3><a href="${post.link}">${post.title}</a></h3>
          <p class="blog-date">${new Date(post.date).toISOString().split("T")[0]}</p>
          <p>${post.excerpt}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => {
      container.innerHTML = "<p>Blog posts could not be loaded.</p>";
      console.error("Error loading blog posts:", err);
    });
});
