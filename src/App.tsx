import { Header } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home, AboutMe, Projects, Experience, Contact } from "./sections";
import { HeaderContextProvider } from "./contexts/HeaderContext";

const App = () => {
  return (
    <HeaderContextProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <main>
        <Home />
        <AboutMe />
        <Projects />
        <div className="row bg-black separatorLineSections" />
        <Experience />
        <Contact />
      </main>
      <footer>© 2023 - Design and Code by Vitor Batista.</footer>
    </HeaderContextProvider>
  );
};

export default App;
