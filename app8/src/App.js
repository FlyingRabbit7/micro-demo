
import React, {useState} from "react";
import { hot } from 'react-hot-loader/root';

import Content from './Content'

function loadComponent(scope, module) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default");
    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}

// const { Table } = await __webpack_init_module_federation_remote('http://localhost:8081/remoteEntry.js');

const App9Button= React.lazy(() => import("app2/Button"));

// const App9Table = React.lazy(
//   loadComponent('app9', './Table')
// );

function App() {
  return (
    <>
      <div>
        <Content></Content>
      </div>
        <h1>
          Hello {name}11111
        </h1>
        <React.Suspense fallback="Loading 111" >
           <App9Button />
         </React.Suspense>
      </>
  )
}

export default hot(App);
