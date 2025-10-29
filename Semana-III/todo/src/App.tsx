import React from 'react';

import './App.css';
import { TaskProvider } from './context/TaskProvider';
import { TaskForm } from './components/TaskForm';
import { TaskTable } from './components/TaskTable';

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <div style={{ padding: "20px" }}>
          <h2>Gestor de Tareas</h2>
          <TaskForm />
          <TaskTable />
        </div>
      </TaskProvider>

    </div>
  );
}

export default App;
