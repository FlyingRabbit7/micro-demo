
import React from "react";
import { hot } from 'react-hot-loader/root';
import Tablea from './Tablea'

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}222222
          <Tablea></Tablea>
        </h1>
      </>
    );
  }
}

export default hot(App);
