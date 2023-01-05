import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import FilterTabs from '../FilterTabs'
import Tasks from '../Tasks'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

const TaskMainPage = () => {
  const [task, setTask] = useState('')
  const [userSelectedTag, setUserSelectedTag] = useState('Health')
  const [addedTasksList, setAddedTasksList] = useState([])
  const [activeFilterTab, setActiveFilterTab] = useState('')
  const [filteredList, setFilteredList] = useState([])

  let tasksList
  if (activeFilterTab === '') {
    tasksList = addedTasksList
  } else {
    tasksList = filteredList
  }

  const onClickCreateTask = event => {
    event.preventDefault()
    const newTask = {
      id: uuidv4(),
      task,
      userSelectedTag,
    }
    const newTasksList = [...addedTasksList, newTask]
    setAddedTasksList(newTasksList)
    setTask('')
    setUserSelectedTag('Health')
  }

  const onClickSetFilterTab = tag => {
    if (tag === activeFilterTab) {
      setActiveFilterTab('')
    } else {
      setActiveFilterTab(tag)
      const filteredTabsList = addedTasksList.filter(
        eachTag => eachTag.userSelectedTag === tag,
      )
      setFilteredList(filteredTabsList)
    }
  }
  return (
    <div className="main-container">
      <div className="left-container">
        <h1 className="create-task-heading">Create a task!</h1>
        <form className="form-container" onSubmit={onClickCreateTask}>
          <label htmlFor="task" className="label-element">
            Task
          </label>
          <input
            type="text"
            id="task"
            value={task}
            onChange={event => setTask(event.target.value)}
            className="input-element"
            placeholder="Enter the task here"
          />
          <label htmlFor="tag" className="label-element">
            Tags
          </label>
          <select
            id="tag"
            className="select-element"
            value={userSelectedTag}
            onChange={event => setUserSelectedTag(event.target.value)}
          >
            {tagsList.map(eachTag => (
              <option
                key={eachTag.optionId}
                className="option-element"
                value={eachTag.optionId}
              >
                {eachTag.displayText}
              </option>
            ))}
          </select>
          <div className="only-add-task-button-container">
            <button type="submit" className="add-task-button">
              Add Task
            </button>
          </div>
        </form>
      </div>
      <div className="right-container">
        <h1 className="tags-tasks-text">Tags</h1>
        <ul className="tags-main-container">
          {tagsList.map(eachTag => (
            <FilterTabs
              key={eachTag.optionId}
              activeTab={activeFilterTab}
              tagDetails={eachTag}
              applyFilter={onClickSetFilterTab}
            />
          ))}
        </ul>
        <h1 className="tags-tasks-text">Tasks</h1>
        <ul className="added-tasks-container">
          {tasksList.length > 0 ? (
            tasksList.map(eachTask => (
              <Tasks key={eachTask.id} taskDetails={eachTask} />
            ))
          ) : (
            <div className="no-tasks-container">
              <p className="no-tasks-added-text">No Tasks Added Yet</p>
            </div>
          )}
        </ul>
      </div>
    </div>
  )
}

export default TaskMainPage
