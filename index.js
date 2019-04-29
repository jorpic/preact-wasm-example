import('hello-wasm')
  .then(wasm => console.log(wasm))
  .catch(err => console.log(err));

const App = () => (<h1>Hello, World!</h1>);
export default App;
