import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

import './App.css'
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/about'>
            <About />
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>

          <Route path='/articles/:id'>
            <Article />
          </Route>

          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
