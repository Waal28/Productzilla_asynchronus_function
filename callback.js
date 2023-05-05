const main = (callback) => {
  callback();
};

const getData = () => {
  try {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        const nTrue = data
          .filter((fil) => {
            return (fil.completed = "true");
          })
          .slice(0, 10);
        console.log(nTrue);
      });
  } catch (err) {
    console.log(err);
  }
};
main(getData);
