import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";
import Porjects from "./Pages/Projects/Porjects";
import Skills from "./Pages/Skills/Skills";
import Testimonials from "./Pages/Testimonials/Testimonials";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>
            <Routes>
                <Route path="/home" element={<Home></Home>}></Route>
            </Routes>
            <Routes>
                <Route path="/about" element={<About></About>}></Route>
            </Routes>
            <Routes>
                <Route path="/projects" element={<Porjects></Porjects>}></Route>
            </Routes>
            <Routes>
                <Route path="/skills" element={<Skills></Skills>}></Route>
            </Routes>
            <Routes>
                <Route
                    path="/testimonials"
                    element={<Testimonials></Testimonials>}
                ></Route>
            </Routes>
            <Routes>
                <Route path="/contact" element={<Contact></Contact>}></Route>
            </Routes>
        </div>
    );
}

export default App;
