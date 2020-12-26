const App = ({ user }) => {
  const nameFormatter = (user) => `${user.name} ${user.surname}`;

  const element = <h2>Hello, {nameFormatter(user)}</h2>;

  return (
    <div>
      <h1>Hello world</h1>
      {element}
    </div>
  );
};

export default App;
