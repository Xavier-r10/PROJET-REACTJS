import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbarmenu from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbarmenu/>
      <Routes>
        <Route path = {'/'}/>
      </Routes>
    </div>
  );
}

export default App;
