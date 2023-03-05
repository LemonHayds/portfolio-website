import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';
import { NavBar } from "./components/NavBar";
import { Introduction } from "./components/Introduction";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { StickySocial } from './components/StickySocial';
import { StickyEmail } from './components/StickyEmail';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <StickySocial />
      <StickyEmail />
      <Introduction />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
