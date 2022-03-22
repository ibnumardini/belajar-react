const root = document.querySelector("#root");

function clicked(args) {
  alert(`clicked ${args}`);
}

// const element = <button onClick={clicked}>Click Me</button>;
// const element = <button onClick={clicked.bind(this, 'wkkww')}>Click Me</button>;
const element = <button onClick={() => { clicked('haloo') }}>Click Me</button>;

ReactDOM.render(element, root);
