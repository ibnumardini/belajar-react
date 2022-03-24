const root = document.querySelector("#root");
const { useEffect, useState } = React;

const App = () => {
  const url = "https://api.spaceflightnewsapi.net/v3/blogs";

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ! dengan then
    // const getData = fetch(url)
    //   .then((res) => res.json())
    //   .then((body) => console.log(body));

    const getData = async () => {
      const request = await fetch(url);
      const response = await request.json();

      setNews(response);
      setLoading(false);
    };

    getData();
  }, []);

  const Card = (props) => {
    return <div className="box">{props.title}</div>;
  };

  return (
    <>
      <h1>Data Fetch</h1>
      {loading && <i>Loading data...</i>}
      {!loading && (
        <ul>
          {news.map((val) => {
            return <Card key={val.id} title={val.title} />;
          })}
        </ul>
      )}
    </>
  );
};

ReactDOM.render(<App />, root);
