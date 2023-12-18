import {useDispatch} from 'react-redux';
import {removeTodo, toggleTodo} from '../../store/slices/todoSlice';
import './todo-item.css';

export default function TodoItem({todo, index}) {
	const dispatch = useDispatch();
	
	const handleRemove = (event) => {
		event.stopPropagation();
		dispatch(removeTodo(index))
	}
	
	const handleToggle = () => {
		dispatch(toggleTodo(index))
	}
	
	return(
		<div
			data-status={todo.completed}
			className="todo-item"
		>
			<input
				className="todo-item__checkbox"
				type="checkbox"
				onClick={handleToggle}
			/>
			<div className="todo-item__text">
				{todo.text}
			</div>
			<button
				className="todo-item__remove"
				onClick={handleRemove}
			>
				Remove
			</button>
		</div>
	);
}