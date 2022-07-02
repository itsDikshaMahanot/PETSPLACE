import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
// import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import TryLogin from "./components/login/trylogin";
import { app, db } from './firebase';


function App() {
  return (
    <div className="app">
      <Login />
      
    </div>
  );
}

export default App;
