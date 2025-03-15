import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TaskList.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function TaskList({ tasks, deleteTask, markCompleted }) {
    return (
        <div className="task-list">

            {tasks.map(task => (
                <div className="task-container" key={task.id}>
                    <div className="task-title-container">
                        <input type="checkbox" name="" id="" onClick={() => markCompleted(task.id)} />
                        <h2 className={`task-title ${task.completed ? 'completed' : ''}`} >
                            {task.title}
                            {/* {task.completed && <span className="completed"> <FontAwesomeIcon icon={faCheck} /> </span> }     */}
                        </h2>

                    </div>
                    <div className="task-button-container">
                        <button className='button-xs btn-delete'>
                            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)} />
                        </button>
                    </div>
                </div>
            ))
        }
        </div>
    )
}