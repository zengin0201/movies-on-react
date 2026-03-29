import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [text, setText] = useState("Batman");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const searchMovies = async (title, pageNum = 1, isNewSearch = true) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=1305e150&s=${title}&page=${pageNum}`,
      );
      const data = await response.json();
      if (data.Response === "True") {
        setMovies((prev) =>
          isNewSearch ? data.Search : [...prev, ...data.Search],
        );
        setPage(pageNum);
      } else {
        setError(data.Error);
      }
    } catch (err) {
      setError("Ошибка сети");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchMovies(text);
  }, []);

  const selectMovie = async (selectedMovie) => {
    setLoading(true);
    try {
      const response_movie = await fetch(
        `https://www.omdbapi.com/?apikey=1305e150&i=${selectedMovie.imdbID}`,
      );
      const data_movie = await response_movie.json();
      if (data_movie.Response === "True") {
        setSelectedMovie(data_movie);
      } else {
        setError(data_movie.error);
      }
    } catch (err) {
      setError("ошибка сети");
    } finally {
      setLoading(false);
    }
  };
  const loadMore = async () => {
    const nextPage = page + 1;
    searchMovies(text, nextPage, false);
  };

  const handleSearch = () => {
    setPage(1);
    searchMovies(text, 1, true);
  };

  const favoriteMovies = (id) => {
  setFavorites((prev) => {
    const isFavorite = prev.includes(id);
    let updated;
    
    if (isFavorite) {
      
      updated = prev.filter((favId) => favId !== id);
    } else {
      
      updated = [...prev, id];
    }
    
    
    localStorage.setItem("favorites", JSON.stringify(updated));
    return updated;
  });
};

  return (
    <div className="app-wrapper">
      <nav className="navbar">
        <div className="logo">
          MOVIE<span>HUB</span>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for movies..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchMovies(text)}
          />
          <button onClick={() => searchMovies(text)}>Search</button>
        </div>
      </nav>

      <div className="container">
        {loading && (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        )}
        {error && <div className="status error">{error}</div>}

        <div className="movie-grid">
          {!loading &&
            !error &&
            movies.map((movie) => (
              <div
                className="movie-card"
                key={movie.imdbID}
                onClick={() => selectMovie(movie)}
              >
                <div className="poster-wrapper">
                  {/* Кнопка избранного */}
                  <button
                    className={`fav-badge ${favorites.includes(movie.imdbID) ? "active" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation(); // Чтобы не открылась модалка
                      favoriteMovies(movie.imdbID);
                    }}
                  >
                    {favorites.includes(movie.imdbID) ? "★" : "☆"}
                  </button>

                  <img
                    src={
                      movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://via.placeholder.com/400x600?text=No+Poster"
                    }
                    alt={movie.Title}
                  />
                  <div className="movie-year">{movie.Year}</div>
                </div>
                <div className="movie-info">
                  <span>{movie.Type}</span>
                  <h3>{movie.Title}</h3>
                </div>
              </div>
            ))}
        </div>
        {!loading && movies.length > 0 && (
          <div className="pagination-container">
            <button className="load-more-btn" onClick={loadMore}>
              Show More
            </button>
          </div>
        )}
      </div>
      {selectedMovie && (
        <div className="modal-overlay" onClick={() => setSelectedMovie(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedMovie(null)}
            >
              &times;
            </button>
            <div className="modal-body">
              <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
              <div className="modal-info">
                <div className="modal-header-row">
                  <h2>{selectedMovie.Title}</h2>
                  <button
                    className={`modal-fav-btn ${favorites.includes(selectedMovie.imdbID) ? "active" : ""}`}
                    onClick={() => favoriteMovies(selectedMovie.imdbID)}
                  >
                    {favorites.includes(selectedMovie.imdbID)
                      ? "★ in Favorites"
                      : "☆ Add to Favorites"}
                  </button>
                </div>
                <h2>{selectedMovie.Title}</h2>
                <div className="modal-meta">
                  <span className="rating">⭐ {selectedMovie.imdbRating}</span>
                  <span>{selectedMovie.Runtime}</span>
                  <span>{selectedMovie.Year}</span>
                </div>
                <p className="genre">
                  <strong>Genre:</strong> {selectedMovie.Genre}
                </p>
                <p className="plot">{selectedMovie.Plot}</p>
                <p className="actors">
                  <strong>Actors:</strong> {selectedMovie.Actors}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
