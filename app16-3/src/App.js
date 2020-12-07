
import React from "react";
import { hot } from 'react-hot-loader/root';
import './styles.css'

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <div style={{border: '1px solid #000', padding: '20px'}}>
          <h2>这是 react 16.3版本</h2>
        </div>
      </>
    );
  }
}

export default hot(App);
