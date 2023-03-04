import React from "react"
import { Route, BrowserRouter, Router, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
function App(){
  return(
    <>
      <Navbar/>
        <Routes>
          <Route path="/" index element={<Home></Home>}></Route>
        </Routes>
    </>
  )
}

export default App;