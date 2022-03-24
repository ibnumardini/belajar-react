const root = document.querySelector("#root");
const { useState } = React;

const App = () => {
  const [activity, setActivity] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({});
  const [alert, setAlert] = useState("");

  function saveTodoHandler(e) {
    e.preventDefault();

    if (!activity) {
      return setAlert("Isi dulu ya!");
    }

    if (edit.id) {
      const updatedTodo = {
        ...edit,
        activity,
      };

      const todoIndex = todos.findIndex((todo) => todo.id === edit.id);

      const updatedTodos = [...todos];
      updatedTodos[todoIndex] = updatedTodo;

      setTodos(updatedTodos);

      return cancelEditHandler();
    }

    const todo = {
      id: Date.now(),
      activity,
      done: false,
    };

    setTodos([...todos, todo]);
    cancelEditHandler();
  }

  function setTodoHandler(e) {
    setActivity(e.target.value);
  }

  function deleteTodoHandler(id) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
    if (edit.id) cancelEditHandler();
  }

  function editTodoHandler(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  }

  function cancelEditHandler() {
    if (edit.id) setEdit({});
    if (activity) setActivity("");
    if (alert) setAlert("");
  }

  function doneTodoHandler(todo) {
    const updatedTodo = {
      ...todo,
      done: !todo.done,
    };

    const todoIndex = todos.findIndex(
      (currentTodo) => currentTodo.id === todo.id
    );

    const updatedTodos = [...todos];
    updatedTodos[todoIndex] = updatedTodo;

    setTodos(updatedTodos);
  }

  return (
    <>
      <h1>Simple Todo List</h1>
      {alert && <p style={{ color: "red", fontStyle: "italic" }}>{alert}</p>}
      <form onSubmit={saveTodoHandler}>
        <input
          type="text"
          placeholder="nama aktifitas"
          value={activity}
          onChange={setTodoHandler}
        ></input>
        <button type="submit">{edit.id ? "Update Todo" : "Add Todo"}</button>
        {edit.id && <button onClick={cancelEditHandler}>Cancel edit</button>}
      </form>
      <div>
        {todos.length > 0 ? (
          <ul>
            {todos.map((todo) => {
              return (
                <li key={todo.id}>
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={doneTodoHandler.bind(this, todo)}
                  ></input>
                  {todo.done ? <del>{todo.activity}</del> : todo.activity}
                  <button onClick={editTodoHandler.bind(this, todo)}>
                    Edit
                  </button>
                  <button onClick={deleteTodoHandler.bind(this, todo.id)}>
                    Hapus
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Tidak ada todo!</p>
        )}
      </div>
    </>
  );
};

ReactDOM.render(<App />, root);
