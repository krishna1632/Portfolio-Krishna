import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
// import Freelance from "./components/Freelance";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      {/* <Route path="/freelance" element={<Freelance />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
