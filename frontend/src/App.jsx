
import React, { useContext, useEffect } from "react";
import "./App.css";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from "./main";
import NavBar from './components/NavBar.jsx';
import Footer from "./components/Footer";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } =
  useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${window.location.origin}/api/v1/user/patient/me`,
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
   <>
   <Router>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/appointment' element={<Appointment/>}/> 
      <Route path='/login' element={<Login/>}/> 
      <Route path='/register' element={<Register/>}/> 
      <Route path='/about' element={<AboutUs/>}/> 
    </Routes>
    <Footer />
    <ToastContainer position='top-center'/>
   </Router>
   </>
  )
}

export default App
