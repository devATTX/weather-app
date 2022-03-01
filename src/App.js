import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Resources from './components/Resources'
import Recipeater from './components/Recipeater'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="Body-Container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route exact path='/resources' element={<Resources />} />
            <Route exact path='/recipeater' element={<Recipeater />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
