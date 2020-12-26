const App = ({ name }) => {
  const element = <h2>Hello, {name}</h2>;

  return (
    <div>
      <h1>Hello world</h1>
      {element}
    </div>
  );
};

export default App;
