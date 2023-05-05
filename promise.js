const getData = fetch("https://jsonplaceholder.typicode.com/todos");
getData
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const nFalse = data
      .filter((fill) => {
        return (fill.completed = "false");
      })
      .slice(0, 10);
    console.log(nFalse);
  })
  .catch((err) => console.log(err));
