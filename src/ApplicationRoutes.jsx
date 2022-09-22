import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Jornada from './pages/Jornada/Jornada'
import Comments from './pages/Comments/Comments'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'

function ApplicationRoutes (){
    return(
        <BrowserRouter>
            <Header />
                <Routes>
                    
                    <Route path="/" element={<Home/>} />
                    <Route path="/jornada" element={<Jornada />} />
                    <Route path="/comments" element={<Comments/>} />
                    <Route path="/contact" element={<Contact/>} />

                </Routes>
            <Footer />
        </ BrowserRouter >
    )
}

export default ApplicationRoutes