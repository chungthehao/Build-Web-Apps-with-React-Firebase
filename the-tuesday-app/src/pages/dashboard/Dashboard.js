import ProjectList from '../../components/ProjectList';
import { useCollection } from '../../hooks/useCollection';
import ProjectFilter from './ProjectFilter';
import { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext'
import './Dashboard.css'

function Dashboard() {
  const { documents: projects, error } = useCollection('projects')
  const [currentFilter, setCurrentFilter] = useState('all')
  const { user } = useAuthContext()

  const changeFilter = newFilter => {
    setCurrentFilter(newFilter)
  }

  const filteredProjects = projects ? projects.filter(p => {
    switch (currentFilter) {
      case 'all':
        return true
      case 'mine':
        let assignedToMe = false
        p.assignedUsersList.forEach(u => {
          if (u.id === user.uid) {
            assignedToMe = true
          }
        })
        return assignedToMe
      case 'development':
      case 'design':
      case 'marketing':
      case 'sales':
        return currentFilter === p.category
      default:
        return true
    }
  }) : null

  return ( 
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {filteredProjects && (
        <ProjectFilter 
          currentFilter={currentFilter}
          changeFilter={changeFilter}  
        />
      )}
      {filteredProjects && <ProjectList projects={filteredProjects} />}
    </div> 
  );
}

export default Dashboard;