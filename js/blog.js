document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".blog-grid");
  
    fetch("posts/blog.json")
      .then(res => res.json())
      .then(posts => {
        posts.forEach(post => {
          const card = document.createElement("div");
          card.className = "blog-card";
          card.innerHTML = `
            <h3><a href="${post.link}">${post.title}</a></h3>
            <p class="blog-date">${post.date}</p>
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
  