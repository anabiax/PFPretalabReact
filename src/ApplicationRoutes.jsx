import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/About/About'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Comments from './pages/Comments/Comments'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'

function ApplicationRoutes (){
    return(
        <BrowserRouter>
            <Header />
            <About />
                <Routes>
                    
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/comments" element={<Comments/>} />
                    <Route path="/contact" element={<Contact/>} />

                </Routes>
            <Footer />
        </ BrowserRouter >
    )
}

export default ApplicationRoutes