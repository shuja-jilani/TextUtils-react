import "./Appa.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// app js me jo kuch likha hoga wo npm start krne ke baad humari site dikhaegi
//JSX hota ye h ki hoti to html hi h bs js ka mukut pehna hota h, jsx humare function ke return ke () ke andr likhi jaati h
//jsx me sb kuch html ki trh h bs for usme htmlFor likhte hn aur jo js ke reseerved keywords honge unhe bhi
// return () ke brackets ke andr jo jsx h usme js likhne ke liye use {}

function App() {
  const [mode, setmode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type, //4 trah ke types hn bootstrap pr dekh le , success, warning, primary, danger
    });
    setTimeout(() => {
      setAlert(null);
    }, 1400);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#040261";
      showAlert("Dark mode has been enabled", "success"); //message aur type
      document.title = "TextUtils-Dark Mode";
      // setInterval(()=>{
      // document.title = "TextUtils is Amazing";
      // },2000)
      // setInterval(()=>{
      // document.title = "Install TextUtils Now";
      // },1500)
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };
  const redMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#500d0d";
      showAlert("Dark red mode has been enabled", "success"); //message aur type
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  const greenMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "green";
      showAlert("Dark green mode has been enabled", "success"); //message aur type
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  const purpleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#75009a";
      showAlert("Dark purple mode has been enabled", "success"); //message aur type
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          redMode={redMode}
          greenMode={greenMode}
          purpleMode={purpleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element ={<About mode={mode}/>}>
            </Route>
            <Route path="/" element ={
            <Textform
                showAlert={showAlert}
                heading="Try TextUtils - Word Counter, Character Counter, Text to speech"
                mode={mode}
              />}>
              
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
