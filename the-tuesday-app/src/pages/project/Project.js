import { useParams } from 'react-router-dom';
import { useDocument } from '../../hooks/useDocument';
import './Project.css'

function Project() {
  const { id } = useParams()
  const { document: project, error } = useDocument('projects', id)
  console.log(project)

  if (error) {
    return <div className='error'>{error}</div>
  }
  if ( ! project) { // When we haven't had the doc yet 
    return <div className='loading'>Loading...</div>
  }

  return ( 
    <div className='project-details'>
      <h1>{project.name}</h1>
    </div> 
  );
}

export default Project;