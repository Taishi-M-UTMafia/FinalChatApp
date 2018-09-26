import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello! World.</h1>
        <p>ぷりぷり</p>
      </div>
    );
  }
}

// TODO(Sunny): ここおかしいよ
setTimeout(() => {
  ReactDOM.render(<MyComponent />, document.querySelector('#main'));
}, 0)
