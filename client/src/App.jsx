import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Formname from "./components/form/Formname";
import Moneybutton from "./components/moneybutton/Moneybutton";
import Text from "./components/textcontent/Text";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <div className="left-panel"></div>
              <div className="center-panel">
                <Text/>
                <Moneybutton/>
                <Formname/>
              
              </div>
              <div className="right-panel"></div>
            </div>
          }
        />
        {/* <Route path="/Cookies" element={<Cookies />} />
        <Route path="/Article1" element={<Article1 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
