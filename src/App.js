import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContentUs from "./pages/ContentUs";
import Dessert from "./pages/Dessert";
import Pie from "./pages/Pie";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ForwardTop from "./components/ForwardTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Dessert" element={<Dessert />} />
        <Route path="ContentUs" element={<ContentUs />} />
        <Route path="Pie" element={<Pie />} />
      </Routes>
      <ForwardTop />
      <Footer />
    </div>
  );
}

export default App;
