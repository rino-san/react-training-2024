import {TodoItemType} from "./App";


type Props = {
    todoItem: TodoItemType;
    onToggle: () => void;
    onDelete: () => void;
};

export function TodoItem({todoItem, onToggle, onDelete}:Props){
    return(
        <li>
            <input 
            type ="checkbox" 
            checked={todoItem.completed}
            onChange={onToggle}
            />
            {todoItem.task}
            <button onClick={onDelete}>削除</button>

        </li>
    )
}

