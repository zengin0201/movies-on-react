# 🎬 MovieHub — Advanced React Cinema Explorer

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![OMDb API](https://img.shields.io/badge/API-OMDb-orange?style=for-the-badge)](http://www.omdbapi.com/)

**MovieHub** is a high-performance web application that allows users to explore a vast database of cinema. Built with a focus on clean code, responsive design, and smooth user interactions.

---

## 📸 Preview
> **Tip:** Add a screenshot of your app here to make the profile look elite! 
> `<img width="2454" height="1233" alt="image" src="https://github.com/user-attachments/assets/054922fe-3579-4a6d-a20c-1d412654e50c" />
`

---

## 🚀 Key Features

* **🔍 Smart Search**: Instant movie retrieval using the OMDb REST API.
* **📑 Seamless Pagination**: "Show More" functionality with state preservation and array spreading.
* **✨ Detailed Modals**: Deep-dive into movie details (Plot, Ratings, Cast) via secondary API calls by `imdbID`.
* **⭐ Persistent Watchlist**: Full-featured "Favorites" system. Save movies to `localStorage` and access them even after refreshing the page.
* **🎨 Premium UI**: 
    * Dark mode aesthetic with **Glassmorphism** effects.
    * Interactive hover states and smooth CSS animations.
    * Responsive grid layout for all device types.

---

## 🛠 Technical Highlights

* **State Management**: Complex use of `useState` and `useEffect` for synchronized UI updates.
* **Asynchronous Logic**: Clean implementation of `async/await` with robust `try/catch` error handling.
* **Data Persistence**: Custom logic for syncing React state with the browser's `localStorage`.
* **Optimization**: Handled event bubbling (`stopPropagation`) and conditional rendering for better performance.

---

## ⚙️ Installation & Setup

1. **Clone the project**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/movie-hub.git](https://github.com/YOUR_USERNAME/movie-hub.git)
