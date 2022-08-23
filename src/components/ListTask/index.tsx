
import { TasksProps } from '../../App';
import { Task } from '../Task/Task';
import styles from './listTask.module.css';


interface Props {
    tasks: TasksProps[];
    taskCompleted: (idCompleted: string) => void;
    onDelete: (idToDelete: string) => void;
}

export function ListTasks({ tasks, onDelete, taskCompleted }: Props) {


    const tasksCompleted = tasks.filter(task => task.isCompleted).length

    return (
        <section className={styles.tasks} >
            <header className={styles.header}>
                <div>
                    <strong>Tareras criadas</strong>
                    <span> {tasks.length} </span>
                </div>

                <div>
                    <strong className={styles.purple} >Tareras Concluids</strong>
                    <span> {tasksCompleted} de {tasks.length}</span>
                </div>

            </header >



            {
                tasks.map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        taskCompleted={taskCompleted}
                        onDelete={onDelete}
                    />
                ))
            }
        </section>
    )
}