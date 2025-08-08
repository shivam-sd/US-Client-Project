import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Gallery from './pages/Gallery';
import Events from "./pages/Events";
import Membership from "./pages/Membership";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import EventDetails from "./pages/EventDetails";
import AdminAccess from "./pages/AdminAccess";
import EventPostByAdmin from './pages/EventPostByAdmin';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='/membership' element={<Membership />} />
        <Route path='/about-us' element={<Aboutus />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/eventDetails' element={<EventDetails />} />
        <Route path='/adminaccess' element={<AdminAccess />} />
        <Route path='/eventpostbyadmin' element={<EventPostByAdmin />} />
      </Routes>
    </div>
  )
}

export default App
