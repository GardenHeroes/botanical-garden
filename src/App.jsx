import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Plants from './pages/Plants'
import Events from './pages/Events'
import Visit from './pages/Visit'
import Gallery from './pages/Gallery'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Membership from './pages/Membership'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/plants" element={<Plants />} />
            <Route path="/events" element={<Events />} />
            <Route path="/visit" element={<Visit />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/membership" element={<Membership />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
