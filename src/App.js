import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  )
}

export default App
