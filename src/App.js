import React from "react"
import { Route, BrowserRouter, Router, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { Appointment } from "./pages/appointment";
function App(){
  return(
    <>
      <Navbar/>
        <Routes>
          <Route path="/" index element={<Home/>}></Route>
          <Route path='/appointment' element={<Appointment/>}></Route>
        </Routes>
    </>
  )
}

export default App;