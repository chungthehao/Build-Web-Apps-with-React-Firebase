import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import './ProjectList.css'

function ProjectList({ projects }) {
  return (
    <div className='project-list'>
      {projects.length === 0 && <p>No project yet!</p>}
      {projects.map(proj => (
        <Link key={proj.id} to={`/projects/${proj.id}`}>
          <h4>{proj.name}</h4>
          <p>Due by {proj.dueDate.toDate().toDateString()}</p>
          <div className="assigned-to">
            <ul>
              {proj.assignedUsersList.map(u => (
                <li key={u.id}>
                  <Avatar src={u.photoURL} />
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectList;