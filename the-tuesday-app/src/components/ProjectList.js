import './ProjectList.css'

function ProjectList({ projects }) {
  return (
    <div>
      {projects.length === 0 && <p>No project yet!</p>}
      {projects.map(proj => (
        <div key={proj.id}>
          {proj.name}
        </div>
      ))}
    </div>
  );
}

export default ProjectList;