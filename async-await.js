const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    const data = await response.json();
    const nTrue = data
      .filter((fil) => {
        return (fil.completed = "true");
      })
      .slice(0, 10);
    const nFalse = data
      .filter((fill) => {
        return (fill.completed = "false");
      })
      .slice(0, 10);
    console.log(nTrue);
    console.log(nFalse);
  } catch (err) {
    console.log(err);
  }
};

getData().then();
