import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbarmenu from './components/Navbar/Navbar';
import Fonctuanality from './components/Fonctunality/Fonctunality';
import Accueil from './components/Accueil/Accueil';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div className="App">
      <Navbarmenu/>
      <Routes>
        <Route path = {'/'} element = {<Accueil/>}/>
      </Routes>
      <Routes>
        <Route path = {'/function'} element = {<Fonctuanality/>}/>
      </Routes>
      <Routes>
        <Route path = {'/login'} element = {<Login/>}/>
      </Routes>
      <Routes>
        <Route path = {'/registration'} element = {<Registration/>}/>
      </Routes>
    </div>
  );
}

export default App;
