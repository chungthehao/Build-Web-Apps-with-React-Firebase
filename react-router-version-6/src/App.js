import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

function App() {
  const [cartIsEmpty] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path='/test' element={(
            <div>
              <h2>Test JSX inline</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati molestias facilis ipsam enim fugit, nisi ad nam ab id exercitationem?</p>
            </div>
          )} />
          <Route path='/navigate-to-about' element={<Navigate to='/about' />} />
          <Route 
            path='/checkout' 
            element={cartIsEmpty ? <Navigate to='/products' /> : <h2>Checkout</h2>} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App