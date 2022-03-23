const root = document.querySelector("#root");

const App = () => {
  const [login, setLogin] = React.useState(false);

  // if (login) {
  //   return (
  //     <>
  //       <h1>Berhasil login!</h1>
  //       <button
  //         onClick={() => {
  //           setLogin(false);
  //         }}
  //       >
  //         Logout
  //       </button>
  //     </>
  //   );
  // }

  return (
    <>
      <h1>Login {login ? "Berhasil" : "Dulu"}</h1>
      <button
        onClick={() => {
          setLogin(!login);
        }}
      >
        {login ? "Logout" : "Login"}
      </button>
    </>
  );
};

ReactDOM.render(<App />, root);
