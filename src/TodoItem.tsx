import {TodoItemType} from "./App";


type Props = {
    todoItem: TodoItemType;
};

export function TodoItem({todoItem}:Props){
    return(
        <li>
            <input type ="checkbox" readOnly checked={todoItem.completed}/>
            {todoItem.task}
        </li>
    )
}