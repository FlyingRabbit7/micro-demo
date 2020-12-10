
import React from "react";
import { hot } from 'react-hot-loader/root';
// import { VueInReact } from 'vuera';
// import vueToReact from './vueToReact.js'
import Adapter from "./adapter2";
import SelfButton from './button'
import SelfButton2 from './button2'
import { Input } from 'antd';
import vueToReact from './vueToReact/index'
// import VueToR from './vueToR'
// import newReactDOM from 'react163/newReactDOM';
// console.log(newReactDOM, 'newReactDOM')

// console.log(SelfButton2, 'SelfButton2')
const SelfButton23 = vueToReact(SelfButton2);
// const Example = React.lazy(() => import("app1/Example"));
// const React163Content = React.lazy(() => import("react163/Content"));

const App2Button= React.lazy(() => import("app2/Button"));


// let  Content = React.lazy(() => import("home/Content"));

// const Search = React.lazy(() => import("app1/Search"));
import './styles.css'

// import Content from 'vue2/Content';
// const Vue2Content = VueInReact(Content);

import Content3 from 'home/Content';
// const Content3 = React.lazy(() => import("home/Content"));
const Vue3Content = vueToReact(Content3, {vueImporter: () => import("home/newVue")});

import Content32 from 'home/Content2';
// const Content3 = React.lazy(() => import("home/Content"));
const Vue32Content = vueToReact(Content32, {vueImporter: () => import("home/newVue")});

// import Test from './Test.vue'
// const VueComponent = VueInReact(Test);


// console.log(Vue2Content, 'Vue2Content')
// console.log(Vue3Content, 'Vue3Content')
// console.log(import("home/Content"), 'Content')
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
    // this.setValue = this.setValue.bind(this);
  }
  onAdd = (number) => {
    this.setState({
      num: number
    })
  }
  onReduce = (number) => {
    this.setState({
      num: number
    })
  }
  render() {
    const { name } = this.props;
    return (
      <>
        <div>
          <h1>这是基座，react 17版本</h1>
          Hello {name}
          <Input placeholder="Basic usage" />
          <SelfButton></SelfButton>
          
          {/* <div className="base-content" style="display: flex; flex-direaction: row;"> */}
            <div style={{display: 'flex', flexDireaction: 'row'}}>
              <div style={{flex: 1}}>
                <React.Suspense fallback="Loading 111" >
                  <App2Button num={this.state.num} onAdd={this.onAdd} />
                </React.Suspense>
              </div>
              <div style={{flex: 1}}>
                {/* <Vue2Content /> */}
                <Adapter
                  // any other props, passed to ModernComponent
                  {...this.state}
                  reactImporter={() => import("react163/newReact")}
                  reactDomImporter={() => import("react163/newReactDOM")}
                  importer={() => import("react163/Content")}
                ></Adapter>
              </div>
              <div style={{flex: 1}}>
                <Vue3Content
                  {...this.state}
                  onReduce={this.onReduce}
                />
                <Vue32Content
                  {...this.state}
                  onReduce={this.onReduce}
                />
                {/* <VueToR
                  {...this.state}
                  onReduce={this.onReduce}
                  importer={() => import("home/Content")}
                  vueImporter={() => import("home/newVue")}                  
                ></VueToR> */}
              </div>
            </div>
          {/* <VueComponent /> */}
          
        </div>
      </>
    );
  }
}

export default hot(App);
