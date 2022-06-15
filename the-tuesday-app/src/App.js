import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Project from './pages/project/Project'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/projects/:id'>
              <Project />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/'>
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
