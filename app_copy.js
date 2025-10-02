"use strict";

// ========== MOVIE OBJECTS ==========

// I stedet for mange separate variabler, definer alt data direkte i arrayet!
const movies = [
  {
    id: 1,
    title: "Barbie",
    year: 2023,
    genre: ["Adventure", "Comedy", "Fantasy"],
    rating: 7.0,
    director: "Greta Gerwig",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
    actors: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
    description:
      "Barbie and Ken embark on a journey of self-discovery after leaving the utopian Barbie Land for the real world.",
  },
  {
    id: 2,
    title: "Dune",
    year: 2021,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    rating: 8.0,
    director: "Denis Villeneuve",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
    actors: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
    description:
      "Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis and its valuable spice.",
  },
  {
    id: 3,
    title: "Dune: Part Two",
    year: 2024,
    genre: ["Action", "Adventure", "Drama"],
    rating: 8.7,
    director: "Denis Villeneuve",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
    actors: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
  },
  {
    id: 4,
    title: "Everything Everywhere All at Once",
    year: 2022,
    genre: ["Action", "Adventure", "Comedy"],
    rating: 7.8,
    director: "Daniel Kwan, Daniel Scheinert",
    image:
      "https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    actors: ["Michelle Yeoh", "Ke Huy Quan", "Stephanie Hsu"],
    description:
      "Nothing in Evelyn's life is as she had dreamed. But suddenly everything changes; she becomes aware of the existence of an infinite number of universes, all in danger of destruction. And she may be the chosen one who can save them all.",
  },
  {
    id: 5,
    title: "Fight Club",
    year: 1999,
    genre: ["Drama"],
    rating: 8.8,
    director: "David Fincher",
    image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
    actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    description:
      "An insomniac office worker and a mysterious soap maker form an underground fight club that grows into something much more.",
  },
  {
    id: 6,
    title: "Forrest Gump",
    year: 1994,
    genre: ["Drama", "Romance"],
    rating: 8.8,
    director: "Robert Zemeckis",
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
    actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and more unfold through the perspective of a man with a low IQ but good intentions.",
  },
  {
    id: 7,
    title: "Goodfellas",
    year: 1990,
    genre: ["Biography", "Crime", "Drama"],
    rating: 8.7,
    director: "Martin Scorsese",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg",
    actors: ["Ray Liotta", "Robert De Niro", "Joe Pesci"],
    description:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his partners in crime over several decades.",
  },
  {
    id: 8,
    title: "Inception",
    year: 2010,
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.8,
    director: "Christopher Nolan",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    description:
      "A thief who enters the dreams of others to steal secrets is offered a chance to have his criminal history erased as payment for implanting another person's idea into a target's subconscious.",
  },
];

console.log("Movies array:", movies);
console.log("Antal movies:", movies.length);

// Find movie list container (gør det én gang)
const movieListContainer = document.querySelector("#movie-list");

// Den SMARTE måde - funktion der både genererer HTML og tilføjer til DOM!
function displayMovie(movieObject) {
  // Konverter genre array til string
  const genreString = movieObject.genre.join(", ");

  const movieHTML = `
    <article class="movie-card" tabindex="0">
      <img src="${movieObject.image}" 
           alt="Poster of ${movieObject.title}" 
           class="movie-poster" />
      <div class="movie-info">
        <h3>${movieObject.title} <span class="movie-year">(${movieObject.year})</span></h3>
        <p class="movie-genre">${genreString}</p>
        <p class="movie-rating">⭐ ${movieObject.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${movieObject.director}</p>
      </div>
    </article>
  `;

  // Tilføj direkte til DOM
  movieListContainer.insertAdjacentHTML("beforeend", movieHTML);
  console.log(`${movieObject.title} tilføjet til DOM!`);
}

// Den ultimative funktion - vis alle movies i ét kald!
function displayMovies(movieArray) {
  // Ryd container først
  movieListContainer.innerHTML = "";

  // Loop gennem alle movies og vis dem (bruger for-of loop!)
  for (const movie of movieArray) {
    displayMovie(movie);
    console.log(`${movie.title} displayed`);
  }

  console.log(`🎉 ${movieArray.length} movies displayed successfully!`);
}

// Test den ultimative funktion
displayMovies(movies);

// Fra mange linjer til ÉN linje:
displayMovies(movies);

// Det er det! Alle movies vises automatisk ✨

// Opret et nyt movie object
const myFavoriteMovie = {
  id: 2,
  title: "The Matrix",
  year: 1999,
  genre: ["Action", "Sci-Fi"],
  rating: 8.7,
  director: "Lana & Lilly Wachowski",
  image: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
  actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
  description:
    "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
};

// Tilføj til array og vis alle
movies.push(myFavoriteMovie);
displayMovies(movies);

console.log(`Nu vises ${movies.length} movies!`);

// ========== ASYNC MOVIE LOADER ==========

async function loadMovies() {
  console.log("🚀 Starter hentning af movie data...");

  // Vent på at få response fra serveren
  const response = await fetch(
    "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json"
  );

  console.log("📡 Response modtaget:", response);

  // Vent på at konvertere response til JavaScript objekter
  const moviesFromJSON = await response.json();

  console.log("🎬 Movies fra JSON:", moviesFromJSON);
  console.log("📊 Antal movies:", moviesFromJSON.length);
  console.log("🎭 Første movie:", moviesFromJSON[0]);

  return moviesFromJSON;
}

// Kald funktionen
loadMovies();

// Test din eksisterende funktion med JSON data
async function testDisplayMovie() {
  console.log("🧪 Tester displayMovie med JSON data...");

  const response = await fetch(
    "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json"
  );
  const moviesFromJSON = await response.json();

  // Vis første movie som test
  displayMovie(moviesFromJSON[0]);
  console.log("✅ Test fuldført - det virkede!");
}

// Kør testen
testDisplayMovie();

// Kør testen
testDisplayMovie();

// ========== DISPLAY ALL MOVIES ==========

function displayMovies(movieArray) {
  // Ryd container først
  movieListContainer.innerHTML = "";

  console.log(`🎬 Viser ${movieArray.length} movies...`);

  // Loop gennem alle movies
  for (const movie of movieArray) {
    displayMovie(movie); // Samme funktion til alt!
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

  // Vis alle movies fra JSON!
  displayMovies(moviesFromJSON);
}

// Start processen
loadMovies();

// Moderne dynamisk data hentning
async function loadMovies() {
  const response = await fetch("https://...");
  const movies = await response.json();
  displayMovies(movies); // Clean og læseligt!
}
loadMovies();
