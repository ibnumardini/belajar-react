const root = document.querySelector("#root");
const { useState } = React;

const App = () => {
  const [name, setName] = useState("");

  function whenSubmit(ev) {
    ev.preventDefault();

    console.log(`Name: ${name}`);
  }

  function whenChange(ev) {
    setName(ev.target.value);
  }

  return (
    <form onSubmit={whenSubmit}>
      <div>
        <label for="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={whenChange}
        ></input>
      </div>
      <button>Send</button>
    </form>
  );
};

ReactDOM.render(<App />, root);
