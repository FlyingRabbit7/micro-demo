import React from "react";

// const VUE_COMPONENT_NAME = 'vuera-internal-component-name'

// const wrapReactChildren = (createElement, children) =>
//   createElement('vuereact-internal-react-wrapper', {
//     props: {
//       component: () => <div>{children}</div>,
//     },
//   })

class Adapter extends React.Component {
  constructor(props) {
    super(props);
    this.refHold;
    this.app = null
    this.vm = null
  }
  init = () => {
    const _this = this;
    (async () => {
      const { component, vueImporter, ...props } = _this.props;
      const Vue = await this.props.vueImporter();
      const { createApp } = Vue;
      const RemoteComponent = this.props.component;

      if (!_this.app) {
        _this.app = createApp(RemoteComponent, {remoteData: {...props}});
        _this.vm = _this.app.mount(this.refHold)
        console.log(_this.vm)
        // console.log(_this.app)
      }
    })();
  };

  componentWillReceiveProps (nextProps) {
    const { component, vueImporter, ...props } = nextProps
    this.updateVueComponent(props);
  }
  
  componentDidMount() {
    this.init();
  }

  componentWillUnmount () {
    this.app.unmount();
  }

  updateVueComponent (nextProps) {
    Object.assign(this.vm.remoteData, nextProps)

    this.vm.$emit('share', nextProps)

    this.vm.$forceUpdate && this.vm.$forceUpdate()
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

