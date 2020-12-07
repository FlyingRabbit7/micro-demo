import React from 'react'
import { createApp } from 'home/newVue';

// console.log(createApp, 'createApp')

const defaultPassProps = props => props

export default (Component, { passProps = defaultPassProps } = {}) => {
  return props => {
    const el = React.useRef(null)
    console.log(el)
    React.useEffect(() => {
      // vue2.0使用方法
    //   const app = new Vue({
    //     el: el.current,
    //     render: h => h(Component, { props: passProps ? passProps(props) : {} })
    //   })
    // vue3.0使用方法
      const app = createApp(Component);
      app.mount(el.current)

    //   return () => app.$destroy()
    })

    return React.createElement(
      'div',
      null,
      React.createElement('div', { ref: el })
    )
  }
}