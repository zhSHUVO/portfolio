import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Porjects from "../Projects/Porjects";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <About></About>
            <Skills></Skills>
            <Porjects></Porjects>
            <Contact></Contact>
        </div>
    );
};

export default Home;
