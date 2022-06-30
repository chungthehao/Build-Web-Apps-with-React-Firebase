import { useState } from "react";
import Avatar from "../../components/Avatar";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { formatDistanceToNow } from 'date-fns'

function ProjectComments({ project }) {
  const [newComment, setNewComment] = useState('')
  const { user } = useAuthContext()
  const { response, updateADocument } = useFirestore('projects')

  const handleSumbit = async e => {
    e.preventDefault()

    // Prepare comment obj before saving it
    const commentData = {
      id: Math.random(),
      content: newComment,
      CreatedAt: timestamp.fromDate(new Date()),
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    
    // Save this comment
    const updatedProject = await updateADocument(project.id, {
      comments: [...project.comments, commentData]
    })
    // console.log(updatedProject)

    if ( ! response.error) {
      setNewComment('') // Clear the textarea, reset it
    }
  }

  return (
    <div className="project-comments">
      <h4>Add new comment:</h4>

      <ul>
        {project.comments.length > 0 && project.comments.map(comment => (
          <li key={comment.id}>
            <div className="comment-author">
              <Avatar src={comment.photoURL} />
              <p>{comment.displayName}</p>
            </div>
            <div className="comment-date">{formatDistanceToNow(comment.CreatedAt.toDate(), { addSuffix: true })}</div>
            <div className="comment-content">
              {comment.content}
            </div>
          </li>
        ))}
      </ul>

      <form className="add-comment" onSubmit={handleSumbit}>
        <label>
          <textarea 
            required
            onChange={e => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button className="btn">Add comment</button>
      </form>
    </div>
  );
}

export default ProjectComments;