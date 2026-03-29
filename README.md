🎬 MovieHub
A modern, responsive movie search application built with React and OMDb API. This project demonstrates advanced React patterns, state management, and seamless integration with RESTful APIs.

🚀 Features
Dynamic Movie Search: Real-time fetching of movie data based on user input.

Detailed View: Interactive modal windows for each movie, fetching additional data like ratings, genre, plot, and actors via a second API call.

Pagination: Smooth "Show More" functionality to browse through multiple pages of search results.

Favorites System: Users can save movies to their personal watchlist. Data is persisted using localStorage.

Modern UI/UX: Dark-themed, cinema-style interface with glassmorphism effects, a loading spinner, and hover animations.

Error Handling: Robust handling of network issues and empty search results to ensure a smooth user experience.

🛠 Tech Stack
Frontend: React (Hooks: useState, useEffect)

Styling: Modern CSS3 (Variables, Flexbox, Grid, Keyframe Animations)

API: OMDb API (RESTful)

Storage: Browser localStorage for data persistence

Build Tool: Vite (recommended for fast development)

🏗 Project Structure
The project follows a modular component-based architecture:

App.jsx: The core logic hub managing API requests, global state, and routing.

index.css: Centralized styles using CSS variables for consistent theming.

Data Flow: Utilizes async/await for clean asynchronous code and efficient state updates.

🔧 Installation & Setup
Clone the repository:

Bash
git clone https://github.com/your-username/movie-hub.git
Navigate to the directory:

Bash
cd movie-hub
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
📝 Usage
To use the application, you need an API key from OMDb API.
Replace the key in App.jsx:

JavaScript
const API_KEY = "your_api_key_here";
📈 Future Improvements
Debounce Search: Optimize API calls by adding a delay during typing.

Watchlist Filter: Add a dedicated view to display only favorite movies.

Skeleton Loading: Replace the spinner with shimmering placeholders for a more premium feel.
