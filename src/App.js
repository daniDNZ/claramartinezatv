import { IconContext } from "react-icons";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";


function App() {
  return (
    <>
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        </IconContext.Provider>
    </>
  );
}

export default App;
