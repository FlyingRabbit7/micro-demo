
import React from "react";
import { hot } from 'react-hot-loader/root';
import Button from 'app/Button'
import './styles.css'

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <div>
          这是app1
          <Button></Button>
        </div>
      </>
    );
  }
}

export default hot(App);
