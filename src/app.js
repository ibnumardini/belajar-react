const root = document.querySelector("#root");
const { useRef } = React;

const App = () => {
  const namaRef = useRef(null);

  function whenSubmit(ev) {
    ev.preventDefault();

    const nama = namaRef.current.value;

    console.log(`nama: ${nama}`);
  }

  return (
    <form onSubmit={whenSubmit}>
      <div>
        <label for="name">Name: </label>
        <input type="text" name="name" id="name" ref={namaRef}></input>
      </div>
      <button>Send</button>
    </form>
  );
};

ReactDOM.render(<App />, root);
