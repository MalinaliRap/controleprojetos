import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Container customClass="min_height">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/company" element={<Company/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/newproject" element={<NewProject/>}></Route>
        </Routes>
      </Container>
      <Footer></Footer>
    </Router>
  );
}

export default App;
