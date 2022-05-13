import './App.css';
import {Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
        <Dashboard/>
    </div>
  );
}

export default App;
