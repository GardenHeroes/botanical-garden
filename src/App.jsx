import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './LanguageContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Gardens from './pages/Gardens'
import Restaurant from './pages/Restaurant'
import Activities from './pages/Activities'
import Wellness from './pages/Wellness'
import Sustainability from './pages/Sustainability'
import Visit from './pages/Visit'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gardens" element={<Gardens />} />
              <Route path="/restaurant" element={<Restaurant />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/wellness" element={<Wellness />} />
              <Route path="/sustainability" element={<Sustainability />} />
              <Route path="/visit" element={<Visit />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
