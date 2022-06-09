import { BrowserRouter, Redirect, Route, Switch  } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';


function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">    
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/login'>
              {user && <Redirect to='/' />}
              { ! user && <Login />}
            </Route>
            <Route path='/signup'>
              {user && <Redirect to='/' />}
              { ! user && <Signup />}
            </Route>
            <Route path='/'>
              { ! user && <Redirect to='/login' />}
              {user && <Home />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
