
import React from "react";
import { hot } from 'react-hot-loader/root';
import Example from './Example'
import './styles.css'

// const Button1 = React.lazy(() => import("app/Button"));

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <div style={{border: '1px solid #000', padding: '20px'}}>
          <h2>这是app1  react 17版本</h2>
          <Example></Example>
          {/* <React.Suspense fallback="Loading Button" >
            <Button1 />
          </React.Suspense> */}
        </div>
      </>
    );
  }
}

export default hot(App);
