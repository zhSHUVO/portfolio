import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Navbar/Navbar";
import Fabric from "./Pages/Projects/Fabric/Fabric";
import Porjects from "./Pages/Projects/Porjects";
import Remc from "./Pages/Projects/REMC/Remc";
import T3 from "./Pages/Projects/T3/T3";
import Skills from "./Pages/Skills/Skills";
import Testimonials from "./Pages/Testimonials/Testimonials";

function App() {
    return (
        <div className="h-screen bg-primary">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>

                <Route path="/home" element={<Home></Home>}></Route>

                <Route path="/about" element={<About></About>}></Route>

                <Route path="/projects" element={<Porjects></Porjects>}></Route>
                <Route path="/remc" element={<Remc></Remc>}></Route>
                <Route path="/fabric" element={<Fabric></Fabric>}></Route>
                <Route path="/t3" element={<T3></T3>}></Route>

                <Route path="/skills" element={<Skills></Skills>}></Route>

                <Route
                    path="/testimonials"
                    element={<Testimonials></Testimonials>}
                ></Route>

                <Route path="/blogs" element={<Blogs></Blogs>}></Route>

                <Route path="/contact" element={<Contact></Contact>}></Route>
            </Routes>
            <Toaster />
            <Footer></Footer>
        </div>
    );
}

export default App;
