import './index.css'

const Tasks = props => {
  const {taskDetails} = props
  const {task, userSelectedTag} = taskDetails
  const convertedTagName =
    userSelectedTag.charAt(0).toUpperCase() +
    userSelectedTag.slice(1).toLowerCase()

  return (
    <li>
      <div className="each-task-container">
        <p className="task-name-text">{task}</p>
        <p className="added-tag-paragraph">{convertedTagName}</p>
      </div>
    </li>
  )
}

export default Tasks
