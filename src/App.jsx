
import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './layout/layout'
import './App.css'

const Home = lazy(() => import('./pages/Home'))
const Explore = lazy(() => import('./pages/Explore'))
const Details = lazy(() => import('./pages/Details'))
const Author = lazy(() => import('./pages/Author'))
const Create = lazy(() => import('./pages/Create'))

const headingStyles = {
  height: '100vh',
  backgroundColor: 'black',
  color: '#fff',
  textAlign: 'center',
  paddingTop: '50%',
}

const App = () => {
  return (
      <Router>
        <Suspense fallback={<h1 style={headingStyles}>Loading...</h1>}>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/details' element={<Details />} />
            <Route path='/author' element={<Author />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        <Footer />
        </Suspense>
      </Router>
  );
}

export default App;
