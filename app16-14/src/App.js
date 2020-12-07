
import React from "react";
import { hot } from 'react-hot-loader/root';
import './styles.css'
import ModernReactComponent from './ModernReactComponent'

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <div style={{border: '1px solid #000', padding: '20px'}}>
          <h2>这是 react 16.13版本</h2>
          <ModernReactComponent></ModernReactComponent>
        </div>
      </>
    );
  }
}

export default hot(App);
