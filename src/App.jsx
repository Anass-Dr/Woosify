import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/sections/Header";
import Features from "./components/sections/Features";
import Pricing from "./components/sections/Pricing";
import FAQs from "./components/sections/FAQs";
import CallToAction from "./components/sections/CallToAction";
import Footer from "./components/sections/Footer";
import SideNav from "./components/SideNav";

function App() {
  const [darkMode, setDark] = useState(false);
  const [navOpen, setNav] = useState(false);

  const handleTheme = () => setDark(!darkMode);
  const handleNav = () => setNav(!navOpen);

  return (
    <div
      className={`${darkMode ? "dark" : ""}${
        navOpen ? " h-screen overflow-hidden" : ""
      }`}
    >
      <div className="font-figtree dark:bg-slate-950 dark:text-white">
        <Navbar
          handleTheme={handleTheme}
          darkMode={darkMode}
          handleNav={handleNav}
        />
        <Header />
        <Features />
        <Pricing />
        <FAQs />
        <CallToAction />
        <Footer darkMode={darkMode} />
        {navOpen && <SideNav handleNav={handleNav} />}
      </div>
    </div>
  );
}

export default App;
