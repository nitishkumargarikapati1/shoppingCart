import './App.css';
import  {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./component/Home";
import Cart from "./component/Cart";
import Header from "./component/Header";

function App() {
  return (
    
    <BrowserRouter>
    <Header></Header>
    <div className='App'>
      <Routes>
      <Route path='/'element={<Home></Home>} exact>  
        
    </Route>
    <Route path='/cart' element={<Cart></Cart>}>
      
  </Route>
      </Routes>
    
    </div>
    </BrowserRouter>
    
    
  );
}

export default App;
