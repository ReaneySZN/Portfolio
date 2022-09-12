import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Services from './Components/Services';
import Project from './Components/Project';
import Contact from './Components/Contact';



function App() {
  return (
    <div className="App">
        <Home/>
        <Services/>
        <Project/>
        <Contact/>
    </div>
  );
}

export default App;
