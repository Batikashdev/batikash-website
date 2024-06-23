import { Route, Routes } from 'react-router-dom';
import './App.css'

import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'




function App() {
 

  return (
  <div>
     <Routes>
        <Route >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog/>} />
        </Route>
      </Routes>
  </div>
  )
}

export default App
