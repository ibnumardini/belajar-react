const root = document.querySelector("#root");

const App = () => {
  const fruits = ["apel", "pisang", "mangga", "apel"];

  return (
    <>
      <ul>
        {fruits.map((fruit, idx) => {
          // key di pakai untuk interl react memanipuasi dom treenya
          return (
            <li key={idx}>{fruit.charAt(0).toUpperCase() + fruit.slice(1)}</li>
          );
        })}
      </ul>
    </>
  );
};

ReactDOM.render(<App />, root);
