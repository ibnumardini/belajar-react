const root = document.querySelector("#root");

// react hooks, adalah fungsi2 yang di turunkan dari class component, misal this.state = useSatate dll
// method componentDidMount = useEffect(() => {}, []) // fungsi yang akan di render pertma kali
const App = () => {
  const { useEffect, useRef } = React;

  // ref ini untuk manipulasi dom, tanpa render ulang seperti useState()
  const titleRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      titleRef.current.textContent = "Aplikasi";
    }, 1000);
  }, []);

  return (
    <>
      <h1 ref={titleRef}>Application</h1>
    </>
  );
};

ReactDOM.render(<App />, root);
