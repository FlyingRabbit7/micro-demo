import React from "react";
// import { createApp } from 'home/newVue';

class Adapter extends React.Component {
  constructor(props) {
    super(props);
    this.refHold;
    this.app = null
  }
  init = (hydrate) => {
    const _this = this;
    (async () => {
      // const ReactDOM = (await this.props.reactDomImporter()).default;
      const Vue = await this.props.vueImporter();
      
      const { createApp } = Vue;
      
      const RemoteComponent = (await this.props.importer()).default;
      console.log(RemoteComponent, 'RemoteComponent')
      const { importer, children, ...rest } = this.props;
      console.log(RemoteComponent, 'RemoteComponent')
      // const renderMethod = hydrate ? ReactDOM.hydrate : ReactDOM.render;
      // createApp(
      //   React.createElement(RemoteComponent.default, rest, children),
      //   this.refHold
      // );
      // const app = createApp({
      //   el: this.refHold,
      //   render: h => h(RemoteComponent)
      // })

      console.log(this.refHold, 'this.refHold')

      console.log(_this.props)
      // if (!_this.app) {
        // _this.app = createApp({
        //   el: this.refHold.current,
        //   render: h => h(Component.default)
        // })
        _this.app = createApp(RemoteComponent);
        // _this.app.props = {num: 1}
        _this.app.mount(this.refHold)
      // }

      
      // console.log(app.$forceUpdate, 'app')
    })();
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    this.init(true);
    this.app.$forceUpdate && this.app.$forceUpdate()
  }

  componentDidMount() {
    this.init();
  }

  render() {
    console.log('render')
    return (
      <div
        id="vueApp"
        style={{ border: "1px red solid", padding: "10px", margin: "20px 0" }}
        ref={(ref) => (this.refHold = ref)}
      />
    );
  }
}

export default Adapter;
