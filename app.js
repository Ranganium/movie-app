"use strict";

// Find movie list container (gør det én gang)
const movieListContainer = document.querySelector("#movie-list");

// Funktion der genererer HTML og tilføjer til DOM
function displayMovie(movieObject) {
  const genreString = movieObject.genre.join(", ");
  const actorsString = movieObject.actors.join(", "); // Ny linje!

  const movieHTML = `
    <article class="movie-card" tabindex="0" data-description="${movieObject.description}>
      <img src="${movieObject.image}" 
           alt="Poster of ${movieObject.title}" 
           class="movie-poster" />
      <div class="movie-info">
        <h3>${movieObject.title} <span class="movie-year">(${movieObject.year})</span></h3>
        <p class="movie-genre">${genreString}</p>
        <p class="movie-rating">⭐ ${movieObject.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${movieObject.director}</p>
        <p class="movie-actors"><strong>Stars:</strong> ${actorsString}</p>
      </div>
    </article>
  `;

  movieListContainer.insertAdjacentHTML("beforeend", movieHTML);
}

// Funktion til at vise alle film
function displayMovies(movieArray) {
  movieListContainer.innerHTML = "";
  console.log(`🎬 Viser ${movieArray.length} movies...`);

  for (const movie of movieArray) {
    displayMovie(movie);
  }

  console.log(`🎉 ${movieArray.length} movies vist successfully!`);
}

// ========== MAIN ASYNC FUNCTION ==========

async function loadMovies() {
  console.log("🌐 Henter alle movies fra JSON...");

  const response = await fetch(
    "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json"
  );
  const moviesFromJSON = await response.json();

  console.log("📊 JSON data modtaget:", moviesFromJSON.length, "movies");

  // Vis alle movies fra JSON
  displayMovies(moviesFromJSON);
}

// Start processen
loadMovies();
