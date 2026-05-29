import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Auth from "./pages/Auth.jsx";
import About from "./pages/About.jsx";

function App() {

  return (
      <div className="app">
          <Navbar/>

          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/auth' element={<Auth/>}/>
          </Routes>
      </div>
  )
}

export default App
