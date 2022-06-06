import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
