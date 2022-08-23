
import { ChangeEvent, FormEvent, useState } from 'react';
import logoImg from '../../assets/logo.svg';


import styles from './header.module.css';

interface Props {
    addTask: (titleTask: string) => void;
}

export function Header({ addTask }: Props) {

    const [title, setTitle] = useState('');

    function handleNewTaskForm(event: FormEvent) {
        event.preventDefault();

        addTask(title)
        setTitle("");
    }

    function handleTitleText(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }

    return (
        <header className={styles.header} >
            <img src={logoImg} alt="" />

            <form
                className={styles.formTask}
                onSubmit={handleNewTaskForm}
            >

                <input
                    type="text"
                    value={title}
                    onChange={handleTitleText}
                    placeholder='Crie uma nova tarefa'
                    required
                />
                <button>Criar</button>

            </form>


        </header>
    )
}