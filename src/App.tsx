import { useState } from "react";
import { v4 as uuidV4 } from 'uuid';


import { Header } from "./components/Header";
import { ListTasks } from "./components/ListTask";

import './styles/global.css'


export interface TasksProps {
  id: string;
  title: string;
  isCompleted: boolean;
}


export function App() {

  const [tasks, setTasks] = useState<TasksProps[]>([])


  function addTask(titleTask: string) {
    const newTask = {
      id: uuidV4(),
      title: titleTask,
      isCompleted: false
    }

    setTasks([...tasks, newTask]);
  }

  function taskCompleted(idTask: string) {
    const newListTasks = tasks.map(task => {
      if (task.id === idTask) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    })


    setTasks(newListTasks);
  }

  function deleteTask(idToDelete: string) {
    const newListTasks = tasks.filter(task => task.id !== idToDelete)
    setTasks(newListTasks)
  }

  return (
    <>
      <Header
        addTask={addTask}
      />
      <ListTasks
        tasks={tasks}
        taskCompleted={taskCompleted}
        onDelete={deleteTask}
      />
    </>
  )
}