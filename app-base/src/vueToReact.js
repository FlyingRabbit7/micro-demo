import React from 'react'
import { createApp } from 'home/newVue';

// console.log(createApp, 'createApp')

const defaultPassProps = props => props

export default (Component, { passProps = defaultPassProps } = {}) => {
  return props => {
    function getInitState(){
      return props.num;
    }
    // const [count, setCount] = useState(getInitState);
    const el = React.useRef(null)
    // console.log(el, 'el')
    const init = (hydrate) => {
      console.log(createApp, 'createApp');
      console.log(Component, 'Component');
      (async () => {
        const app = createApp(Component); 
        
        console.log(el.current, 'el.current')
        app.mount(el.current)
      })();
    };
    React.useEffect(() => {
      // vue2.0使用方法
    //   const app = new Vue({
    //     el: el.current,
    //     render: h => h(Component, { props: passProps ? passProps(props) : {} })
    //   })
    // console.log('useEffect')
    console.log(111)
    // vue3.0使用方法
    
      const app = createApp(Component);
      console.log(app, 'app')
      
      app.mount(el.current)
      console.log(app.$forceUpdate, 'app')
      // init()

    //   return () => app.$destroy()
    },[])
    console.log(222)

    return React.createElement(
      'div',
      null,
      React.createElement('div', { ref: el })
    )
  }
}