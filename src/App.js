import { ToastContainer } from 'react-toastify';
import TodoList from "./components/TodoList/TodoList";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className="container">
      <TodoList />
      <ToastContainer />
    </div>
  );
}