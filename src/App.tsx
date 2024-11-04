import { useState } from 'react';
import './App.css';
import { TodoItem } from './TodoItem';



type TodoItemType = {
  id: number;
  task: string;
  completed: boolean;
}



export default function App() {
  const [todoList, setTodoList] = useState<TodoItemType[]>([
    { id: 1, task: 'Learning Browser', completec: true },
    { id: 2, task: 'Learning JavaScript/TypeScript', completec: true },
    { id: 3, task: 'Learning React', completec: false },
    { id: 4, task: 'Learning Next.js', completec: false },
  ]);

  const [newTask, setNewTask]　= useState("");
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

  // タスクを追加する関数
  const addTodo = () =>{
    if (!newTask.trim()) return;
    const newTodo: TodoItemType = {
      id: Date.now(),
      task: newTask,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setNewTask('');
  };

  // タスクの完了状態を切り替える関数

  const toggleCompletion = (id:number )=>{
    setTodoList(todoList.map(todo =>
      todo.id === id ? {...todo, completed: ! todo.completed} : todo));
  };


  const deleteTodo = (id: number) =>{
    setTodoList(todoList.filter(todo => todo.id !== id))
  } 

  const filteredTodoList =  todoList.filter(todo =>{
    if (filter === "completed" ) return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  })



  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          placeholder="New task"
        />
        <button onClick={addTodo} disabled={!newTask.trim()}>
          追加
        </button>
      </div>
      <div>
        <label>
          <input
            type="radio"
            checked={filter === 'all'}
            onChange={() => setFilter('all')}
          />
          全て
        </label>
        <label>
          <input
            type="radio"
            checked={filter === 'completed'}
            onChange={() => setFilter('completed')}
          />
          完了
        </label>
        <label>
          <input
            type="radio"
            checked={filter === 'incomplete'}
            onChange={() => setFilter('incomplete')}
          />
          未完了
        </label>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredTodoList.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompletion(todo.id)}
            />
            {todo.task}
            <button onClick={() => deleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
