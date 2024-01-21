import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Component/Home';
import Signup from './Component/Signup';
import Login from './Component/Login';
import ChoosingSection from './Component/ChoosingSection';
import EState from "./context/everything_context/estate";
import Landing from './Component/Landing';
import Ticket from './Component/Ticket';
import IndividualMovie from './Component/IndividualMovie';
import Navbar from './Component/Navbar';
import LoaderMain from './Component/LoaderMain';


function App() {
  return (
      <EState>
        <Router>
          <Routes>
            <Route exact path='/navbar' element = {<Navbar />}></Route>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path='/choosingsection' element={<ChoosingSection />}></Route>
            <Route exact path='/signup' element={<Signup />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/ticket' element={<><Navbar /> <Ticket /></>}></Route>
            <Route exact path='/landing' element={<><Navbar /> <Landing /></>}></Route>
            <Route exact path='/individual' element={<><Navbar /><IndividualMovie /></>}></Route>
            <Route exact path='/loadermain' element={<LoaderMain />}></Route>
          </Routes>
        </Router>
      </EState>
  );
}

export default App;
