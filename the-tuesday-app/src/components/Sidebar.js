import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'
import './Sidebar.css'
import { NavLink } from 'react-router-dom';


function Sidebar() {
  return ( 
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/* Avatar and user */}
          <p>Hey Henry</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to='/' exact>
                <img src={DashboardIcon} alt="Dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/create'>
                <img src={AddIcon} alt="Add icon" />
                <span>Add a Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div> 
  )
}

export default Sidebar;