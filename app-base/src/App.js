
import React from "react";
import { hot } from 'react-hot-loader/root';
import { VueInReact } from 'vuera'

const Search = React.lazy(() => import("app1/Search"));
let  Content = React.lazy(() => import("home/Content"));
// const Search = React.lazy(() => import("app1/Search"));
import './styles.css'

Content = VueInReact(Content);




console.log(import("app1/Search"), 'Search')
// console.log(import("home/Content"), 'Content')
class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <div>
          Hello {name}
          <React.Suspense fallback="Loading Button">
            <Search />
            <Content />
          </React.Suspense>
        </div>
      </>
    );
  }
}

export default hot(App);
