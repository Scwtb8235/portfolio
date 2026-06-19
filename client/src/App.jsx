import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
function App(){
  return(
    <Routes>
    <Route path="/" element={<h1>Home</h1>} />
    </Routes>
  )
};
 export default App;