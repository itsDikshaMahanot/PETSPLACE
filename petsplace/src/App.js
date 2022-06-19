import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./components/login/Login";
import { app, db } from './firebase';


function App() {
  return (
    <div className="app">
      <Login />
      <Router>
        <Routes>
          <Route exact path="/" component={Login} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
