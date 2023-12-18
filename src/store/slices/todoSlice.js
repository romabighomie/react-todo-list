import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
	'todos/fetchTodos',
	async function(_, {rejectWithValue}) {
		try {
			const response = await fetch('https://6580209f6ae0629a3f546b84.mockapi.io/api/v1/todos');
			
			if(!response.ok) {
				throw new Error('Error');
			}
			
			return await response.json();
		}
		catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
		loading: false,
		error: null,
	},
	reducers: {
		addTodo(state, action) {
			console.log(action)
			state.todos
				.push({text: action.payload, completed: false});
		},
		removeTodo(state, action) {
			state.todos = state.todos
				.filter((todo, index) => index !== action.payload);
		},
		toggleTodo(state, action) {
			state.todos = state.todos
				.map((todo, index) => index === action.payload ? {...todo, completed: !todo.completed} : todo);
		},
	},
	extraReducers: (builder) => {
		builder
		.addCase(fetchTodos.pending, (state, action) => {
			state.loading = true;
		})
		.addCase(fetchTodos.fulfilled, (state, action) => {
			state.loading = false;
			state.todos = action.payload;
		})
		.addCase(fetchTodos.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload;
		});
	},
});

export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions;
export default todoSlice.reducer;