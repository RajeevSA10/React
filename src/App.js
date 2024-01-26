import logo from './logo.png';
import './App.css';
import ReiteratorComp from './components/ClassComp/classcomp';
import NavBar from './components/FunctionalComp/NavBar';
import Home from './components/FunctionalComp/Home';
import Skills from './components/FunctionalComp/Skills';
import About from './components/FunctionalComp/About';
import Login from './components/FunctionalComp/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/Home" element = {<Home/>}></Route>
        <Route path="/About" element = {<About/>}></Route>
        <Route path="/skills" element = {<Skills/>}></Route>
        <Route path="/login" element = {<Login/>}></Route>
      </Routes>
      </BrowserRouter>

      <ReiteratorComp/>
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
