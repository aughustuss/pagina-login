import React from "react"
import { Route, BrowserRouter, Router, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { Appointment } from "./pages/appointment";
import { EmailConfirm } from "./pages/emailconfirm";
function App(){
  return(
    <>
      <Navbar/>
        <Routes>
          <Route path="/" index element={<Home/>}></Route>
          <Route path='/appointment' element={<Appointment/>}></Route>
          <Route path="/emailconfirm" element={<EmailConfirm/>}></Route>
        </Routes>
    </>
  )
}

export default App;