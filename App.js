import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Header from './header';

function App() {
  var [loginText, setLoginText] = useState("login")
  const renderBtn = () => {
    if (loginText === "login") {
      return setLoginText("logout");
      
    } else {
      return setLoginText("login");
    }
  }
  
  return (
    <>
      <BrowserRouter>
        <Header renderBtn={renderBtn} loginText = {loginText} />
        <Routes>
          <Route path="/" element={<h2> Welcome to home page </h2>} />
          <Route path="/about" element={loginText ==="logout"? <h2> Welcome to about page </h2> : <Navigate to="/"/>} />
          <Route path="/contact" element={ loginText ==="logout"? <h2> Welcome to contact page </h2> : <Navigate to="/"/>} />
        </Routes>
        
      </BrowserRouter>
    </>
  )

}

export default App;
