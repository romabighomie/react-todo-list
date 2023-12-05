import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from './actions';

const initialState = {
	todos: [{text: 'test', completed: false}],
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, {text: action.payload.text}]
			}
		case REMOVE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo, index) => index !== action.payload.index)
			}
		case TOGGLE_TODO:
			return {
				...state,
				todos: state.todos
					.map((todo, index) => index === action.payload.index ? {...todo, completed: !todo.completed} : todo)
			}
		default:
			return initialState;
	}
}

export default todoReducer;