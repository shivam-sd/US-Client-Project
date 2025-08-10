import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Gallery from './pages/Gallery';
import Events from "./pages/Events";
import Membership from "./pages/Membership";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import EventDetails from "./pages/EventDetails";
import AdminAccess from "./helper/AdminAccess";
import EventPostByAdmin from './helper/EventPostByAdmin';
import AdminDashboard from './helper/AdminDashboard';
import ProtectedRoute from './helper/ProtectedRoutes';


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
        <Route path='/eventDetails/:id' element={<EventDetails />} />
        <Route path='/adminaccess' element={<AdminAccess />} />
        <Route path='/eventpostbyadmin' element={<ProtectedRoute><EventPostByAdmin /></ProtectedRoute>} />
        <Route path='/admindashboard' element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      </Routes>
    </div>
  )
}

export default App
