import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Roster from "./components/Roster/Roster";
import Content from "./components/Content/Content";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Roster />
      <Content />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
