import SingleCart from "./Components/SingleCart";
import { MainRoutes } from "./Pages/MainRoutes";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer/>
    </div>
  );
}

export default App;
