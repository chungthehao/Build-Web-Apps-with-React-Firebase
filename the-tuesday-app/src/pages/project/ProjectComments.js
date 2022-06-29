import { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";

function ProjectComments() {
  const [newComment, setNewComment] = useState('')
  const { user } = useAuthContext()

  const handleSumbit = e => {
    e.preventDefault()

    // Prepare comment obj before saving it
    const comment = {
      id: Math.random(),
      content: newComment,
      CreatedAt: timestamp.fromDate(new Date()),
      displayName: user.displayName,
      photoURL: user.photoURL
    }

    console.log(comment)
  }

  return (
    <div className="project-comments">
      <h4 className="page-title">Add new comment:</h4>

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