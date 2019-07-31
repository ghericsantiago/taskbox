import React from 'react';
import TaskList from './components/TaskList';


function App() {

  const defaultTasks = [
    { id: '1', title: 'Task 1', state: 'TASK_INBOX' },
    { id: '2', title: 'Task 2', state: 'TASK_INBOX' },
    { id: '3', title: 'Task 3', state: 'TASK_INBOX' },
    { id: '4', title: 'Task 4', state: 'TASK_INBOX' },
    { id: '5', title: 'Task 5', state: 'TASK_INBOX' },
    { id: '6', title: 'Task 6', state: 'TASK_INBOX' },
  ];  

  return (
    <div className="App">
      <TaskList tasks={defaultTasks} onPinTask={()=>{}} onArchiveTask={()=>{}} />
    </div>
  );
}

export default App;
