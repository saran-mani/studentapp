import "./App.css";
import Navbar from "./components/Hedder/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/About/AboutUs";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import ItStudents from "./Pages/Student Details/ItStudent";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/it-students-details" element={<ItStudents />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
