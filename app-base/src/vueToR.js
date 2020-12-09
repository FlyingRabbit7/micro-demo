import React from "react";
// import { createApp } from 'home/newVue';

const VUE_COMPONENT_NAME = 'vuera-internal-component-name'

const wrapReactChildren = (createElement, children) =>
  createElement('vuera-internal-react-wrapper', {
    props: {
      component: () => <div>{children}</div>,
    },
  })


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

      console.log(this.props, 'this.refHold')

      // console.log(_this.props)
      if (!_this.app) {
        // _this.app = createApp({
        //   el: this.refHold.current,
        //   render: h => h(Component.default)
        // })
        // _this.app = createApp({
        //   // data: {},
        //   render() {
        //     return Vue.h(VUE_COMPONENT_NAME, {}, [
        //       Vue.h(RemoteComponent)
        //     ])
        //   },
        //   components: {
        //     [VUE_COMPONENT_NAME]: RemoteComponent
        //   },
        // }, {num: this.props.num});
        console.log(this.props)
        _this.app = createApp(RemoteComponent, {remotedata: {...this.props}});
        
        _this.vm = _this.app.mount(this.refHold)
      }

      
      // console.log(app.$forceUpdate, 'app')
    })();
  };
  

  componentWillReceiveProps (nextProps) {
    const { component, ...props } = nextProps

    // if (this.currentVueComponent !== component) {
    //   this.updateVueComponent(this.props.component, component)
    // }
    /**
     * NOTE: we're not comparing this.props and nextProps here, because I didn't want to write a
     * function for deep object comparison. I don't know if this hurts performance a lot, maybe
     * we do need to compare those objects.
     */
    // Object.assign(this.vueInstance.$data, props)
    console.log(this.vm, '<-----------------vm')
    console.log(this.app, '<-----------------app')
    console.log(props, 'dddddddddddddddddddddddd')
    // console.log(this.vm.$forceUpdate)
    // this.vm.$props = {num: this.props.num}
    Object.assign(this.vm.remotedata, props)
    // this.vm.num = 11
    // this.vm.set('num', this.props.num)
    console.log(this.vm, 'c')
    this.vm.$forceUpdate && this.vm.$forceUpdate()
  }
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   // this.init(true);
  //   console.log(prevProps, 'dd')
  //   // console.log(this.vm.$forceUpdate)
  //   // this.vm.$props = {num: this.props.num}
  //   Object.assign(this.vm.remotedata, {num: this.props.num})
  //   // this.vm.num = 11
  //   // this.vm.set('num', this.props.num)
  //   console.log(this.vm, 'c')
  //   this.vm.$forceUpdate && this.vm.$forceUpdate()
  // }

  componentDidMount() {
    this.init();
  }

  // updateVueComponent (prevComponent, nextComponent) {
  //   this.currentVueComponent = nextComponent

  //   /**
  //    * Replace the component in the Vue instance and update it.
  //    */
  //   console.log('update')
  //   // console.log(this.app)
  //   // this.vm.$props = {num: this.props.num}
  //   console.log(this.vm, 'c')
  //   this.vm.$forceUpdate && this.vm.$forceUpdate()
  // }

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
