import('hello-wasm')
  .then(wasm => console.log("greeting:", wasm.greet()))
  .catch(err => console.log(err));

const App = () => (<h1>Hello, World!</h1>);
export default App;
