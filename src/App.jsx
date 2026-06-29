import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import FavMovie from "./pages/FavMovie";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import { MovieProvider } from "./contexts/MovieContext";
import Copyright from "./components/copyright";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/details" element={<Details />} />
          <Route path="/favorites" element={<FavMovie />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Copyright />
    </MovieProvider>
  );
};

export default App;
