import { useEffect, useState } from "react";
import axios from "axios";

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

// FETCH TASKS
    const fetchTasks = async () => {
        try {
            const res = await axios.get( "http://localhost:5000/api/tasks" );
            setTasks(res.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

// USE EFFECT
    useEffect(() => {
        fetchTasks();
    }, []);

// DELETE TASK
    const deleteTask = async (id) => {
        try {
            await axios.delete( `http://localhost:5000/api/tasks/${id}`);
            fetchTasks();
        } catch (error) {
            console.log(error);
        }
    };

// LOADING
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (

        <>

            <div className="task-header"> <h2>📋 Your Tasks</h2>
            <div className="task-count"> {tasks.length} Tasks </div>
            </div>

            <div className="task-list">
                {
                    tasks.length === 0 ? (
                        <div className="empty-task">
                            No Tasks Added Yet
                        </div>
                    ) : (
                        tasks.map((task) => (
                            <div className="task-item" key={task._id}>
                                <div className="task-left">
                                    <div className="check-icon">✅ </div>
                                    <span> {task.title} </span>
                                </div>

                                <button className="delete-btn" onClick={() => deleteTask(task._id) }> 🗑 Delete </button>
                            </div>
                        ))
                    )
                }
            </div>
        </>
    );
}

export default TaskList;