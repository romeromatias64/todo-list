import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import Header from './components/Header/Header'

export default function App() {
  const [tasks, setTasks] = useState([])

  // Funcion para añadir una tarea a la lista
  function addTask(data) {
    const newTask = {
      id: tasks.length + 1,
      title: data.title,
      completed: false
    }

    const tasksCopy = [...tasks]
    tasksCopy.push(newTask)

    setTasks(tasksCopy)
  }

  // Funcion para marcar una tarea como completada
  function markCompleted(id) {
    // Buscamos en tasks la task con el id que recibimos
    const task = tasks.find(task => task.id === id)

    // Cambiamos el valor de completed a su opuesto
    if (task) {
      task.completed = !task.completed
      // Actualizamos el estado de tasks
      setTasks([...tasks])
    }


    
  }

  // Funcion para eliminar una tarea de la lista
  function deleteTask(id) {

    const confirmDelete = confirm("¿Estás seguro de eliminar esta tarea?")
    
    if (confirmDelete) {
      const tasksCopy = [...tasks]
      const index = tasksCopy.findIndex(task => task.id === id)

      // Verificamos si se encontró la tarea
      if (index !== -1) {
        tasksCopy.splice(index, 1)
        setTasks(tasksCopy)
      }
    }
  }

  return (
    <>
      <Header />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} markCompleted={markCompleted} />
    </>
  )
}

