import './App.css';
import './index.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Athletics from './pages/Athletics/Athletics';
import About from './pages/About/About';
import Calendar from './pages/Calendar/Calendar';
import Contact from './pages/Contact/Contact';
import Curriculum from './pages/Curriculum/Curriculum';
import Donate from './pages/Donate/Donate';
import Enroll from './pages/Enroll/Enroll';
import LunchMenu from './pages/LunchMenu/LunchMenu';
import StudentLife from './pages/StudentLife/StudentLife';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/athletics" element={<Athletics/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/curriculum" element={<Curriculum/>}/>
          <Route path="/donate" element={<Donate/>}/>
          <Route path="/enroll" element={<Enroll/>}/>
          <Route path="/lunch-menu" element={<LunchMenu/>}/>
          <Route path="/student-life" element={<StudentLife/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
