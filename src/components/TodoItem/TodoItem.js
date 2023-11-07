import './todo-item.css';

export default function TodoItem(props) {
	
	return(
		<>
			{props.todos.map(todo => {
				return (
					<div
						className="todo-item"
						key={todo.id}
						data-status={todo.completed}
					>
						<input
							className="todo-item__checkbox"
							type="checkbox"
							onChange={() => props.toggleTodoStatus(todo.id)}
						/>
						<div>
							{todo.text}
						</div>
					</div>
				);
			})}
		</>
	);
}