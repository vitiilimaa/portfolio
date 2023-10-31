import { Header } from "./components";
import {
  Home,
  AboutMe,
  Projects,
  Experience,
  Contact,
} from "./sections";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <AboutMe />
        <Projects />
        <div className="row mt-5 bg-black separatorLineSections" />
        <Experience />
        <Contact />
      </main>
      <footer>© 2023 - Design and Code by Vitor Batista.</footer>
    </>
  );
};

export default App;
