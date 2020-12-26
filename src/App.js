const App = ({ user }) => {
  const nameFormatter = (user) => `${user.name} ${user.surname}`;

  const getUser = (user) => {
    if (user) {
      return `Hello, ${nameFormatter(user)}`;
    }
    return "Hello Stranger";
  };

  const element = <h2>{getUser(user)}</h2>;

  return (
    <div>
      <h1>Hello world</h1>
      {element}
    </div>
  );
};

export default App;
