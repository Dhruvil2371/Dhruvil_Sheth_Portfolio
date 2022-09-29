// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Animation from "./Components/Trial/Animation";
import DarkModeToggle from "react-dark-mode-toggle";


function App(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeChangeHandler = () => {
    setIsDarkMode(!isDarkMode);
  };
  console.log(isDarkMode);

  return (
    <div className="App">
      <Navigation dark={isDarkMode} />
      <header className={isDarkMode ? "dark_app" : "App-header"}>
        <h2>Dhruvil Sheth</h2>
        <Animation dark={isDarkMode} />
        <DarkModeToggle
          onChange={themeChangeHandler}
          checked={isDarkMode}
          size={80}
        />
      </header>
      <About dark={isDarkMode} />
      <Projects dark={isDarkMode} />
      <Skills dark={isDarkMode} />
      <Footer />
    </div>
  );
}

export default App;
