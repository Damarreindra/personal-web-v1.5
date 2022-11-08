import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Blogs from './components/Pages/Blogs'
import Project from './components/Pages/Project'
import Sidebar from './components/Sidebar';
import Keyboard from './components/blog-pages/Keyboard';
import WelcomeBlog from './components/blog-pages/WelcomeBlog';


function App() {
  
  return (
   <>
    <Router>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/blogs'>
            <Route index element={<Blogs/>}/>
            <Route path='welcome' element={<WelcomeBlog/>}/>
            <Route path='keyboard' element={<Keyboard/>}/>
        </Route>
      </Routes>
    </Router>
   </>
  );
}

export default App;
