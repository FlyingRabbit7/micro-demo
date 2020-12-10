import React from 'react'
import VueWrapper from './vueToR'
import isReactComponent from './utils/isReactComponent'
import Vue from 'vue'

// console.log(Vue, 'Vue')
export default function ReactResolver (component, config) {
  console.log(component.prototype, 'component')
  // return isReactComponent(component)
  //   ? component
  //   : props => <VueWrapper {...props} component={component} {...config} />
  return props => <VueWrapper {...props} component={component} {...config} />
}