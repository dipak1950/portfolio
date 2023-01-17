import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Gallery from './Components/Gallery';
import Contect from './Components/Contect';
import Footer from './Components/Footer';
import Resume from './Components/Resume';
function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Service />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/contect' element={<Contect />} />
            <Route path='/resume' element={<Resume />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;
