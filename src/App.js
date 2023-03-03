import React from "react"
import { Route, BrowserRouter, Router, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
function App(){
  return(
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;