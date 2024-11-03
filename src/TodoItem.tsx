import {TodoItemType} from "./App";


type Props = {
    todoItem: TodoItemType;
};

export function TodoItem({todoItem}:Props){
    const onDeleteButton = () =>{
        console.log(`Delete task: ${todoItem.task}`)
    };
    return(
        <li>
            <input type ="checkbox" readOnly checked={todoItem.completed}/>
            {todoItem.task}
            <button onClick={onDeleteButton}>削除</button>
        </li>
    )
}