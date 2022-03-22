const root = document.querySelector("#root");

// ! state adalah data yang ada di react componet, yang apabila
// ! data tersebut berubah maka komponent akan di render ulang
const App = () => {
  // const state = React.useState(1);

  // const count = state[0];
  // const updateCount = state[1];

  // * dengan cara destructuring array
  const [count, setCount] = React.useState(1);

  return (
    <>
      <button
        onClick={() => {
          if (count == 0) return;
          setCount(count - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
};

ReactDOM.render(<App />, root);
