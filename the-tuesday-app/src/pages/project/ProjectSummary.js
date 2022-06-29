import { useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";

function ProjectSummary({ project }) {
  const { user } = useAuthContext()
  const { deleteADocument } = useFirestore('projects')
  const history = useHistory()

  const handleDelete = () => {
    deleteADocument(project.id) // Don't need to wait, so there's no "await"
    history.push('/') // Redirect to Dashboard
  }

  return ( 
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p>By {project.createdBy.displayName}</p>
        <p className="due-date">Project due by {project.dueDate.toDate().toDateString()}</p>
        <p className="details">{project.details}</p>
        <h4>Project assigned to:</h4>
        <div className="assigned-users">
          {project.assignedUsersList.map(u => (
            <div key={u.id}>
              <Avatar src={u.photoURL} />
            </div>
          ))}
        </div>
      </div>
      {user.uid === project.createdBy.id && (
        <button className="btn" onClick={handleDelete}>Mark as complete</button>
      )}
    </div>
  );
}

export default ProjectSummary;