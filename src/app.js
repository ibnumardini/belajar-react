const root = document.querySelector("#root");

const App = () => {
  const [count, setCount] = React.useState(0);

  // ! akan di jalankan ketika component di render ulang
  // ! parameter kedua pada useEffect adalah menampung state mana yang akan di watch
  React.useEffect(
    function () {
      console.log(`exec`);

      return function () {
        // lifecycle: unmount
        // di hapus dari memory
        console.log(`component destroy`);
      };
    },
    [count]
  );

  /**
   * jika tanpa param kedua maka jenis lifecycelnya adlaha did update
   * jika di isi array kosong jenisnya did mount
   */

  return (
    <>
      <h1 id="judul">Hello gais</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Tambah
      </button>
      <span> Nilai saat ini: {count}</span>
    </>
  );
};

ReactDOM.render(<App />, root);
