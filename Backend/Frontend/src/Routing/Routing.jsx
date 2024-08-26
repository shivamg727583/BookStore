import React from 'react'
import {Navigate, Route,Routes}  from 'react-router-dom';
import Courses from '../Courses/Courses';
import Home from '../Home/home';
import Signup from '../Components/Signup';
import ContactForm from '../Contact/Contact';
import About from '../About/About';
import { useAuth } from '../Context/AuthContext';
function Routing() {
  const [authUser,setAuthUser]= useAuth();

  return (
    

    <Routes>
<Route   path="/"   element={<Home />} />
<Route   path="/course"   element={authUser?  <Courses /> :<Navigate to='/signup'/>} />
<Route path="/signup"  element={ authUser ? <Navigate to='/' />    : <Signup />} />
<Route path='/contact' element={<ContactForm />} />
<Route path='/about' element={<About />} />



    </Routes>
    
  )
}

export default Routing