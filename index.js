import './style';
import { Component } from 'preact';

import('hello-wasm')
  .then(wasm => console.log(wasm))
  .catch(err => console.log(err));

export default class App extends Component {
  render() {
    return (
      <h1>Hello, World!</h1>
    );
  }
}
