import { useState } from "react";

import "./index.css";
import NavBar from "./Components/pages/Nav/NavBar";
import Hero from "./Components/pages/Hero/HeroSection";
import AboutSection from "./Components/pages/About/AboutSection";
import CTASection from "./Components/pages/CTA/CtaSection";

function App() {
    return (
        <>
            <div className="bg-[#0F1015] overflow-x-hidden select-none">
                <NavBar />
                <Hero />
                <AboutSection />
                <CTASection />
            </div>
        </>
    );
}

export default App;
