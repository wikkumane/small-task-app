export const ShowTask = ({taskList, setTaskList}) => {

    return (
        <section className="showTask">
            <p className="head">
                
                <span className="title">Tasks</span>
                <span className="count">{taskList.length}</span>
                
                <button className="clearAll" onClick={() => setTaskList([]) }>Clear</button>
            </p>
            <ul>
                { taskList.map((task) => (
                <li key = {task.id}>
                        <p>
                        <span className="name">{task.name}</span>
                        <span className="time">{task.time}</span>
                        </p>
                        <i className="bi bi-pencil-square"></i>
                        <i className="bi bi-trash"></i>
                </li>
                 
                ))}
            </ul>
        </section>
    )
}