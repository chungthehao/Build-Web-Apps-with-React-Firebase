import Avatar from "../../components/Avatar";

function ProjectSummary({ project }) {
  return ( 
    <div className="project-summary">
      <h2 className="page-title">{project.name}</h2>
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
  );
}

export default ProjectSummary;