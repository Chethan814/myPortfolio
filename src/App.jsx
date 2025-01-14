import { useState } from "react";

import "./index.css";
import NavBar from "./Components/pages/Nav/NavBar";
import Hero from "./Components/pages/Hero/HeroSection";

function App() {
    return (
        <>
            <div className="bg-[#0F1015] overflow-x-hidden">
                <NavBar />
                <Hero />
            </div>
        </>
    );
}

export default App;
