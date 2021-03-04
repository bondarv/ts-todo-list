import React from 'react';
import EditTaskForm from './EditTaskForm';
import NewTaskForm from './NewTaskForm';
import { Task } from '../../types/taskType';

interface TaskFormProps {
  editing: boolean;
  task: Task;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

function TaskForm({ editing, task, setEditing }: TaskFormProps) {
  if (editing) {
    return <EditTaskForm task={task} setEditing={setEditing} />;
  } else {
    return <NewTaskForm />;
  }
}

export default TaskForm;
