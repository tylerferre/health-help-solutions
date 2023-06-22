import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NurseList from './components/NurseList'
import NurseProfile from './components/NurseProfile'

function App() {

  return (
    <div className='App'>
      
      <Router>
        <nav className='navbar'>
        <h1 className='title'><span>H</span>ealth-<span>H</span>elp-<span>S</span>olutions</h1>
          <Link className='navlink' to='/'>Home</Link>
          <Link className='navlink' to='/about'>About</Link>
          <Link className='navlink' to='/nurses'>Nurses</Link>
          <Link className='navlink' to='/contact'>Contact</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/nurses' element={<NurseList/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/nurses/:nurseId' element={<NurseProfile/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
