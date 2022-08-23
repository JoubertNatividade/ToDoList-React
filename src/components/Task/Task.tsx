import { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi'
import { TasksProps } from '../../App';

import { AiOutlineCheck } from 'react-icons/ai'

import styles from './task.module.css';

interface Props {
    task: TasksProps;
    taskCompleted: (idCompleted: string) => void
    onDelete: (idToDelete: string) => void
}



export function Task({ task, taskCompleted, onDelete }: Props) {




    function handleToggleIsCompleted() {
        taskCompleted(task.id)
        console.log(task)
    }

    function deleteTask() {
        onDelete(task.id)
    }


    return (

        <div className={styles.task} >
            <button
                className={styles.checkContainer}
                onClick={handleToggleIsCompleted}
            >
                {task.isCompleted ? <AiOutlineCheck /> : <div />}
            </button>

            <p className={task.isCompleted ? styles.textCompleted : ""} >{task.title} </p>


            <button
                title='Apagar tarefa'
                className={styles.trashBtn}
                onClick={deleteTask}
            >
                <FiTrash2 size={20} />
            </button>
        </div>


    )
}