import {useState} from "react";
import {toast} from "react-toastify";
import './todo-list.css';
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList() {
	const [todos, setTodos] = useState([]);
	const [value, setValue] = useState('');

	function addTodo(event) {
		event.preventDefault();
		
		if(value.trim() !== '') {
			const newTodo = {id: Date.now(), text: value, completed: false}
			const newTodos = [...todos, newTodo];
			
			setTodos(newTodos);
			setValue('');
			
			toast.info('Todo notes added', {autoClose: 1300})
		}
	}
	
	function toggleTodoStatus(id) {
		setTodos(
			todos.map(todo => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			})
		);
	}
	
	return(
		<div className="todo-list">
			
			<form className="todo-list__header">
				<input
					type="text"
					className="todo-list__input"
					onChange={(event) => setValue(event.target.value)}
					value={value}
				/>
				<button
					type="submit"
					className="todo-list__add-btn"
					onClick={addTodo}
				>
					Add
				</button>
			</form>
			
			<div className="todo-list__wrapper">
				<TodoItem
					todos={todos}
					toggleTodoStatus={toggleTodoStatus}
				/>
			</div>
			
		</div>
	);
}