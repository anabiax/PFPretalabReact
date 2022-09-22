import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Comments from './pages/Comments/Comments'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'

function ApplicationRoutes (){
    return(
        <BrowserRouter>
            <Header />
                <Routes>
                    
                    <Route path="/" element={<About/>} />
                    <Route path="/comments" element={<Comments/>} />
                    <Route path="/contact" element={<Contact/>} />

                </Routes>
            <Footer />
        </ BrowserRouter >
    )
}

export default ApplicationRoutes