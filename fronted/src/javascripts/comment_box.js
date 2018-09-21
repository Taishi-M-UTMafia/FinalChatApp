import React from 'react';
import ReactDOM from 'react-dom';

/* コンポーネント */
class MyComponent extends React.Component {
  render(){
    return (
      <div>
        <h1>Hello! World.</h1>
        <p>このページはテストページです。</p>
      </div>
    )
  }
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('main') /* Reactが生成したコードを#mainに書き出す */
);
