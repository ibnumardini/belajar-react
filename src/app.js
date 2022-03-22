const root = document.querySelector("#root");

function DateNow() {
  return (
    <p>
      Jam Sekarang <b>{new Date().toLocaleTimeString()}</b>
    </p>
  );
}

function tick() {
  const element = (
    <>
      <DateNow />
    </>
  );

  ReactDOM.render(element, root);
}

// render ulang setiap 1 detik
setInterval(() => {
  tick();
}, 1000);
