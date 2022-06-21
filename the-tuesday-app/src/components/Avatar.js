import './Avatar.css'

function Avatar({ src }) {
  return ( <div className="avatar">
    <img src={src} alt="User avatar" />
  </div> );
}

export default Avatar;