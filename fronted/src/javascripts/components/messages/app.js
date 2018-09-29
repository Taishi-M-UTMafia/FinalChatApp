import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>
        <input onChange = {e => console.log(e.target.value)} />
      </div>
    );
  }
}

// TODO(Sunny): エラー文でたまま、なんでSetTimeOutしないと機能しないの？
setTimeout(() => {
  ReactDOM.render(<App />, document.querySelector('#main'));
}, 0)
