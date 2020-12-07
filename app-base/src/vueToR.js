import React from "react";
import { createApp } from 'home/newVue';

class Adapter extends React.Component {
  constructor(props) {
    super(props);
    this.refHold;
  }
  init = (hydrate) => {
    (async () => {
      // const ReactDOM = (await this.props.reactDomImporter()).default;
      // const React = (await this.props.reactImporter()).default;
      const RemoteComponent = await this.props.importer();
      const { importer, children, ...rest } = this.props;
      console.log(rest, 'rest')
      const renderMethod = hydrate ? ReactDOM.hydrate : ReactDOM.render;
      renderMethod(
        React.createElement(RemoteComponent.default, rest, children),
        this.refHold
      );
    })();
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    this.init(true);
  }

  componentDidMount() {
    this.init();
  }

  render() {
    return (
      <div
        style={{ border: "1px red solid", padding: "10px", margin: "20px 0" }}
        ref={(ref) => (this.refHold = ref)}
      />
    );
  }
}

export default Adapter;
