import { useState } from "react";
import axios from "axios";

function AddTask() {
    const [title, setTitle] = useState("");

    const addTask = async (e) => {
        e.preventDefault();
        if (!title) {
            alert("Please Enter Task");
            return;
        }
        try {
            await axios.post( "http://localhost:5000/api/tasks", { title });
            setTitle("");
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={addTask} className="form" >
            {/* INPUT */}
            <input
                type="text"
                placeholder="Enter Task"
                value={title}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
            />
            {/* BUTTON */}
            <button type="submit"> + Add Task </button>
        </form>
    );
}

export default AddTask;