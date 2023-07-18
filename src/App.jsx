const App = () => {
  const jsx = (
    <div className="divId">
      <h1 className="headerId">hello jsx</h1>
      <h2>{String(true)} </h2>
      <h3>{String(undefined)} </h3>
      <h4>{null} </h4>
    </div>
  );
  console.log(jsx);
  return jsx;
};

export default App;
