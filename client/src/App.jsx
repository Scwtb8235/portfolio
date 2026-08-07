import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projects from './pages/Projects';
function App(){
  return(
    
      <>
      <Navbar /><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes><
      Footer />
      </>
  )
};
 export default App;
 