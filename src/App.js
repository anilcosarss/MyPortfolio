import './App.css';

import Navbar from './components/Navbar';
import Home from "./pages/Home"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SocialLinks from './components/SocialLinks';


function App() {
    return (
        <BrowserRouter>

            <Navbar />
            <SocialLinks />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/experience' element={<Experience />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;
