import {useState, useEffect} from 'react';
import {toast} from 'react-toastify';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, fetchTodos} from '../../store/slices/todoSlice';
import TodoItem from '../TodoItem/TodoItem';
import './todo-list.css';

export default function TodoList() {
	const dispatch = useDispatch();
	const {todos} = useSelector(state => state.todos);
	const [value, setValue] = useState('');
	
	useEffect(() => {
		dispatch(fetchTodos())
	}, [])

	function addNewTodo(event) {
		event.preventDefault();
		
		if(value.trim() !== '') {
			dispatch(addTodo(value));
			setValue('');
			toast.info('Todo notes added', {autoClose: 1300})
		}
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
					onClick={addNewTodo}
				>
					Add
				</button>
			</form>
			
			<div className="todo-list__wrapper">
				{todos.map((todo, index) => (
					<TodoItem
						key={index}
						todo={todo}
						index={index}
					/>
				))}
			</div>
			
		</div>
	);
}