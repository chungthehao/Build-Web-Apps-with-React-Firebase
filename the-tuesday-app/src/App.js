import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Project from './pages/project/Project'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'
import './App.css'
import Sidebar from './components/Sidebar'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Sidebar />
          <div className="container">
            <Navbar />
            <Switch>
              <Route path='/create'>
                {user && <Create />}
                { ! user && <Redirect to='/login' />}
              </Route>
              <Route path='/projects/:id'>
                {user && <Project />}
                { ! user && <Redirect to='/login' />}
              </Route>
              <Route path='/login'>
                { ! user && <Login />}
                {user && <Redirect to='/' />}
              </Route>
              <Route path='/signup'>
                { ! user && <Signup />}
                {user && <Redirect to='/' />}
              </Route>
              <Route path='/'>
                {user && <Dashboard />}
                { ! user && <Redirect to='/login' />}                
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
