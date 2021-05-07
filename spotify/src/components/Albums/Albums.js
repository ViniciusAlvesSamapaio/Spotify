/* eslint-disable no-undef */
import db from './db.json';
import NewTaskInput from './NewTaskInput';
import ListItem from './ListItem';

export default function Albums(){

    const [tasks, setTasks] = useState([]);

    function addNewTask(task) {
    const itensCopy = Array.from(tasks);
    itensCopy.push({id: tasks.length, value: task});
    setTasks(itensCopy);
    }

    function updateTask({target}, index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1, { id: index, value: target.value });
    setTasks(itensCopy);
    }

    function deleteTask(index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1);
    setTasks(itensCopy);
    }
        return (
            <div className="App">
                <div className="App-header">
                <NewTaskInput onSubmit={addNewTask} />
                {tasks.map(({id, value}, index) => (
                    <ListItem
                    key={id}
                    value={value}
                    onChange={(event) => updateTask(event, index)}
                    onDelete={() => deleteTask(index)}
                    />
                ))}
                </div>
                <div className="Array-preview">
                <pre>
                    {JSON.stringify(tasks, null, 4)}
                </pre>
                </div>
            </div>
        );
}