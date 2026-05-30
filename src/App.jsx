import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Auth from "./pages/Auth.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";
import Footer from './components/Footer.jsx';

function App() {

  return (
      <div className="app">
          <Navbar/>
            <main className="app-content">
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/auth' element={<Auth/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/settings' element={<Settings/>}/>
          </Routes>
          </main>

          <Footer/>
      </div>
  )
}

export default App
