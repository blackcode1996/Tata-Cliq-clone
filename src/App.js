import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';
import SingleCart from './Components/SingleCart';
import { MainRoutes } from './Pages/MainRoutes';
import { SingleProduct } from './Pages/SingleProduct';

function App() {
  return (
    <div className="App">
      <Navbar/>
         <MainRoutes/>
      <Footer/>
        
      {/* <SingleCart/>
      <SingleProduct/> */}
    </div>
  );
}

export default App;