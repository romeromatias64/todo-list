import { useForm } from "react-hook-form";
import './TaskForm.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function TaskForm({ addTask }) {
    const { register, handleSubmit } = useForm()

    return (
        <form action="" className="task-form" onSubmit={handleSubmit(addTask)}>
            <div className="input-group">
                <input className="title-input" type="text" {...register("title")} id="title" required placeholder="Escribe tu próxima tarea" />
                <button className="btn btn-add" type="submit">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </form>
    )
}