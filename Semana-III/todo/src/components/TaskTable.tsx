import {useTask} from "../hooks/useTask";
import { Task } from "../models/Task";

export const TaskTable = () => {
    const { task, updateStatus, deleteTask} = useTask();

    return (
        <table border={1} cellPadding={5}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Descripción</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {task.map((t:Task) => (
          <tr key={t.id}>
            <td>{t.id}</td>
            <td>{t.title}</td>
            <td>{t.description}</td>
            <td>
              <select
                value={t.status}
                onChange={(e) =>
                  updateStatus(t.id, e.target.value as typeof t.status)
                }
              >
                <option>Pendiente</option>
                <option>En Proceso</option>
                <option>Completada</option>
              </select>
            </td>
            <td>
              <button onClick={() => deleteTask(t.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    );
};