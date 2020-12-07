/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/
(() => { // webpackBootstrap
  /******/
  var __webpack_modules__ = ({

    /***/
    "./src/index.js":
      /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/
      /*! unknown exports (runtime-defined) */
      /*! runtime requirements: __webpack_require__.e, __webpack_require__, __webpack_require__.* */
      /***/
      ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

        eval("var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nPromise.all(/*! import() */[__webpack_require__.e(\"vendors\"), __webpack_require__.e(\"src_bootstrap_js-webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_-d5a5f0\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bootstrap */ \"./src/bootstrap.js\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbXB0eS1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0KFwiLi9ib290c3RyYXBcIikiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

        /***/
      }),

    /***/
    "./node_modules/webpack/hot sync ^\\.\\/log$":
      /*!***************************************************************!*\
        !*** ./node_modules/webpack/hot/ sync nonrecursive ^\.\/log$ ***!
        \***************************************************************/
      /*! default exports */
      /*! exports [not provided] [no usage info] */
      /*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
      /***/
      ((module, __unused_webpack_exports, __webpack_require__) => {

        var map = {
          "./log": "./node_modules/webpack/hot/log.js"
        };


        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }

        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          }
          return map[req];
        }
        webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        };
        webpackContext.resolve = webpackContextResolve;
        module.exports = webpackContext;
        webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

        /***/
      }),

    /***/
    "webpack/container/reference/app2":
      /*!************************************************************!*\
        !*** external "app2@http://localhost:8082/remoteEntry.js" ***!
        \************************************************************/
      /*! dynamic exports */
      /*! exports [maybe provided (runtime-defined)] [no usage info] */
      /*! runtime requirements: module, __webpack_require__.l, __webpack_require__.* */
      /***/
      ((module, __unused_webpack_exports, __webpack_require__) => {

        "use strict";
        var error = new Error();
        module.exports = new Promise((resolve, reject) => {
          if (typeof app2 !== "undefined") return resolve();
          __webpack_require__.l("http://localhost:8082/remoteEntry.js", (event) => {
            if (typeof app2 !== "undefined") return resolve();
            var errorType = event && (event.type === 'load' ? 'missing' : event.type);
            var realSrc = event && event.target && event.target.src;
            error.message = 'Loading script failed.\n(' + errorType + ': ' + realSrc + ')';
            error.name = 'ScriptExternalLoadError';
            error.type = errorType;
            error.request = realSrc;
            reject(error);
          }, "app2");
        }).then(() => app2);

        /***/
      }),

    /***/
    "webpack/container/reference/home":
      /*!************************************************************!*\
        !*** external "home@http://localhost:3002/remoteEntry.js" ***!
        \************************************************************/
      /*! dynamic exports */
      /*! exports [maybe provided (runtime-defined)] [no usage info] */
      /*! runtime requirements: module, __webpack_require__.l, __webpack_require__.* */
      /***/
      ((module, __unused_webpack_exports, __webpack_require__) => {

        "use strict";
        var error = new Error();
        module.exports = new Promise((resolve, reject) => {
          if (typeof home !== "undefined") return resolve();
          __webpack_require__.l("http://localhost:3002/remoteEntry.js", (event) => {
            if (typeof home !== "undefined") return resolve();
            var errorType = event && (event.type === 'load' ? 'missing' : event.type);
            var realSrc = event && event.target && event.target.src;
            error.message = 'Loading script failed.\n(' + errorType + ': ' + realSrc + ')';
            error.name = 'ScriptExternalLoadError';
            error.type = errorType;
            error.request = realSrc;
            reject(error);
          }, "home");
        }).then(() => home);

        /***/
      }),

    /***/
    "webpack/container/reference/react163":
      /*!****************************************************************!*\
        !*** external "react163@http://localhost:8008/remoteEntry.js" ***!
        \****************************************************************/
      /*! dynamic exports */
      /*! exports [maybe provided (runtime-defined)] [no usage info] */
      /*! runtime requirements: module, __webpack_require__.l, __webpack_require__.* */
      /***/
      ((module, __unused_webpack_exports, __webpack_require__) => {

        "use strict";
        var error = new Error();
        module.exports = new Promise((resolve, reject) => {
          if (typeof react163 !== "undefined") return resolve();
          __webpack_require__.l("http://localhost:8008/remoteEntry.js", (event) => {
            if (typeof react163 !== "undefined") return resolve();
            var errorType = event && (event.type === 'load' ? 'missing' : event.type);
            var realSrc = event && event.target && event.target.src;
            error.message = 'Loading script failed.\n(' + errorType + ': ' + realSrc + ')';
            error.name = 'ScriptExternalLoadError';
            error.type = errorType;
            error.request = realSrc;
            reject(error);
          }, "react163");
        }).then(() => react163);

        /***/
      })

    /******/
  });
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/
    if (__webpack_module_cache__[moduleId]) {
      /******/
      return __webpack_module_cache__[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/
      id: moduleId,
      /******/
      loaded: false,
      /******/
      exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/
    module.loaded = true;
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/
  __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/
  /* webpack/runtime/compat get default export */
  /******/
  (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = (module) => {
      /******/
      var getter = module && module.__esModule ?
        /******/
        () => module['default'] :
        /******/
        () => module;
      /******/
      __webpack_require__.d(getter, {
        a: getter
      });
      /******/
      return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/
  /* webpack/runtime/create fake namespace object */
  /******/
  (() => {
    /******/
    var getProto = Object.getPrototypeOf ? (obj) => Object.getPrototypeOf(obj) : (obj) => obj.__proto__;
    /******/
    var leafPrototypes;
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 16: return value when it's Promise-like
    /******/ // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function (value, mode) {
      /******/
      if (mode & 1) value = this(value);
      /******/
      if (mode & 8) return value;
      /******/
      if (typeof value === 'object' && value) {
        /******/
        if ((mode & 4) && value.__esModule) return value;
        /******/
        if ((mode & 16) && typeof value.then === 'function') return value;
        /******/
      }
      /******/
      var ns = Object.create(null);
      /******/
      __webpack_require__.r(ns);
      /******/
      var def = {};
      /******/
      leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
      /******/
      for (var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
        /******/
        Object.getOwnPropertyNames(current).forEach(key => def[key] = () => value[key]);
        /******/
      }
      /******/
      def['default'] = () => value;
      /******/
      __webpack_require__.d(ns, def);
      /******/
      return ns;
      /******/
    };
    /******/
  })();
  /******/
  /******/
  /* webpack/runtime/define property getters */
  /******/
  (() => {
    /******/ // define getter functions for harmony exports
    /******/
    __webpack_require__.d = (exports, definition) => {
      /******/
      for (var key in definition) {
        /******/
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/
  /* webpack/runtime/ensure chunk */
  /******/
  (() => {
    /******/
    __webpack_require__.f = {};
    /******/ // This file contains only the entry chunk.
    /******/ // The chunk loading function for additional chunks
    /******/
    __webpack_require__.e = (chunkId) => {
      /******/
      return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
        /******/
        __webpack_require__.f[key](chunkId, promises);
        /******/
        return promises;
        /******/
      }, []));
      /******/
    };
    /******/
  })();
  /******/
  /******/
  /* webpack/runtime/get javascript chunk filename */
  /******/
  (() => {
    /******/ // This function allow to reference async chunks
    /******/
    __webpack_require__.u = (chunkId) => {
      /******/ // return url for filenames based on template
      /******/
      return "" + chunkId + "." + {
        "src_bootstrap_js-webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_-d5a5f0": "fdc881ef897df71ed5fe",
        "webpack_sharing_consume_default_react_react": "4279d8cf3b9b202b4bce",
        "webpack_container_remote_app2_Button": "31ed260eca1ec33f1d85",
        "webpack_container_remote_react163_newReact": "69f97eb1def845554e29",
        "webpack_container_remote_react163_newReactDOM": "55d32ca63d9dfd080b6b",
        "webpack_container_remote_react163_Content": "a3dd94a0eaf34e3bf219"
      } [chunkId] + ".js";
      /******/
    };
    /******/
  })();
  /******/
  /******/
  /* webpack/runtime/global */
  /******/
  (() => {
    /******/
    __webpack_require__.g = (function () {
      /******/
      if (typeof globalThis === 'object') return globalThis;
      /******/
      try {
        /******/
        return this || new Function('return this')();
        /******/
      } catch (e) {
        /******/
        if (typeof window === 'object') return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/
  /* webpack/runtime/harmony module decorator */
  /******/
  (() => {
    /******/
    __webpack_require__.hmd = (module) => {
      /******/
      module = Object.create(module);
      /******/
      if (!module.children) module.children = [];
      /******/
      Object.defineProperty(module, 'exports', {
        /******/
        enumerable: true,
        /******/
        set: () => {
          /******/
          throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
          /******/
        }
        /******/
      });
      /******/
      return module;
      /******/
    };
    /******/
  })();
  /******/
  /******/
  /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  (() => {
    /******/
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
    /******/
  })();
  /******/
  /******/
  /* webpack/runtime/load script */
  /******/
  (() => {
    /******/
    var inProgress = {};
    /******/
    var dataWebpackPrefix = "empty-project:";
    /******/ // loadScript function to load a script via script tag
    /******/
    __webpack_require__.l = (url, done, key) => {
      /******/
      if (inProgress[url]) {
        inProgress[url].push(done);
        return;
      }
      /******/
      var script, needAttach;
      /******/
      if (key !== undefined) {
        /******/
        var scripts = document.getElementsByTagName("script");
        /******/
        for (var i = 0; i < scripts.length; i++) {
          /******/
          var s = scripts[i];
          /******/
          if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
            script = s;
            break;
          }
          /******/
        }
        /******/
      }
      /******/
      if (!script) {
        /******/
        needAttach = true;
        /******/
        script = document.createElement('script');
        /******/
        /******/
        script.charset = 'utf-8';
        /******/
        script.timeout = 120;
        /******/
        if (__webpack_require__.nc) {
          /******/
          script.setAttribute("nonce", __webpack_require__.nc);
          /******/
        }
        /******/
        script.setAttribute("data-webpack", dataWebpackPrefix + key);
        /******/
        script.src = url;
        /******/
      }
      /******/
      inProgress[url] = [done];
      /******/
      var onScriptComplete = (prev, event) => {
        /******/ // avoid mem leaks in IE.
        /******/
        script.onerror = script.onload = null;
        /******/
        clearTimeout(timeout);
        /******/
        var doneFns = inProgress[url];
        /******/
        delete inProgress[url];
        /******/
        script.parentNode && script.parentNode.removeChild(script);
        /******/
        doneFns && doneFns.forEach((fn) => fn(event));
        /******/
        if (prev) return prev(event);
        /******/
      }
      /******/
      ;
      /******/
      var timeout = setTimeout(onScriptComplete.bind(null, undefined, {
        type: 'timeout',
        target: script
      }), 120000);
      /******/
      script.onerror = onScriptComplete.bind(null, script.onerror);
      /******/
      script.onload = onScriptComplete.bind(null, script.onload);
      /******/
      needAttach && document.head.appendChild(script);
      /******/
    };
    /******/
  })();
  /******/
  /******/
  /* webpack/runtime/make namespace object */
  /******/
  (() => {
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = (exports) => {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
  })();
  /******/
  /******/
  /* webpack/runtime/node module decorator */
  /******/
  (() => {
    /******/
    __webpack_require__.nmd = (module) => {
      /******/
      module.paths = [];
      /******/
      if (!module.children) module.children = [];
      /******/
      return module;
      /******/
    };
    /******/
  })();
  /******/
  /******/
  /* webpack/runtime/remotes loading */
  /******/
  (() => {
    /******/
    var chunkMapping = {
      /******/
      "src_bootstrap_js-webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_-d5a5f0": [
        /******/
        "webpack/container/remote/home/newVue",
        /******/
        "webpack/container/remote/home/Content"
        /******/
      ],
      /******/
      "webpack_container_remote_app2_Button": [
        /******/
        "webpack/container/remote/app2/Button"
        /******/
      ],
      /******/
      "webpack_container_remote_react163_newReact": [
        /******/
        "webpack/container/remote/react163/newReact"
        /******/
      ],
      /******/
      "webpack_container_remote_react163_newReactDOM": [
        /******/
        "webpack/container/remote/react163/newReactDOM"
        /******/
      ],
      /******/
      "webpack_container_remote_react163_Content": [
        /******/
        "webpack/container/remote/react163/Content"
        /******/
      ]
      /******/
    };
    /******/
    var idToExternalAndNameMapping = {
      /******/
      "webpack/container/remote/home/newVue": [
        /******/
        "default",
        /******/
        "./newVue",
        /******/
        "webpack/container/reference/home"
        /******/
      ],
      /******/
      "webpack/container/remote/home/Content": [
        /******/
        "default",
        /******/
        "./Content",
        /******/
        "webpack/container/reference/home"
        /******/
      ],
      /******/
      "webpack/container/remote/app2/Button": [
        /******/
        "default",
        /******/
        "./Button",
        /******/
        "webpack/container/reference/app2"
        /******/
      ],
      /******/
      "webpack/container/remote/react163/newReact": [
        /******/
        "default",
        /******/
        "./newReact",
        /******/
        "webpack/container/reference/react163"
        /******/
      ],
      /******/
      "webpack/container/remote/react163/newReactDOM": [
        /******/
        "default",
        /******/
        "./newReactDOM",
        /******/
        "webpack/container/reference/react163"
        /******/
      ],
      /******/
      "webpack/container/remote/react163/Content": [
        /******/
        "default",
        /******/
        "./Content",
        /******/
        "webpack/container/reference/react163"
        /******/
      ]
      /******/
    };
    /******/
    __webpack_require__.f.remotes = (chunkId, promises) => {
      /******/
      if (__webpack_require__.o(chunkMapping, chunkId)) {
        /******/
        chunkMapping[chunkId].forEach((id) => {
          /******/
          var getScope = __webpack_require__.R;
          /******/
          if (!getScope) getScope = [];
          /******/
          var data = idToExternalAndNameMapping[id];
          /******/
          if (getScope.indexOf(data) >= 0) return;
          /******/
          getScope.push(data);
          /******/
          if (data.p) return promises.push(data.p);
          /******/
          var onError = (error) => {
            /******/
            if (!error) error = new Error("Container missing");
            /******/
            if (typeof error.message === "string")
              /******/
              error.message += '\nwhile loading "' + data[1] + '" from ' + data[2];
            /******/
            __webpack_modules__[id] = () => {
              /******/
              throw error;
              /******/
            }
            /******/
            data.p = 0;
            /******/
          };
          /******/
          var handleFunction = (fn, arg1, arg2, d, next, first) => {
            /******/
            try {
              /******/
              var promise = fn(arg1, arg2);
              /******/
              if (promise && promise.then) {
                /******/
                var p = promise.then((result) => next(result, d), onError);
                /******/
                if (first) promises.push(data.p = p);
                else return p;
                /******/
              } else {
                /******/
                return next(promise, d, first);
                /******/
              }
              /******/
            } catch (error) {
              /******/
              onError(error);
              /******/
            }
            /******/
          }
          /******/
          var onExternal = (external, _, first) => external ? handleFunction(__webpack_require__.I, data[0], 0, external, onInitialized, first) : onError();
          /******/
          var onInitialized = (_, external, first) => handleFunction(external.get, data[1], getScope, 0, onFactory, first);
          /******/
          var onFactory = (factory) => {
            /******/
            data.p = 1;
            /******/
            __webpack_modules__[id] = (module) => {
              /******/
              module.exports = factory();
              /******/
            }
            /******/
          };
          /******/
          handleFunction(__webpack_require__, data[2], 0, 0, onExternal, 1);
          /******/
        });
        /******/
      }
      /******/
    }
    /******/
  })();
  /******/
  /******/
  /* webpack/runtime/sharing */
  /******/
  (() => {
    /******/
    __webpack_require__.S = {};
    /******/
    var initPromises = {};
    /******/
    var initTokens = {};
    /******/
    __webpack_require__.I = (name, initScope) => {
      /******/
      if (!initScope) initScope = [];
      /******/ // handling circular init calls
      /******/
      var initToken = initTokens[name];
      /******/
      if (!initToken) initToken = initTokens[name] = {};
      /******/
      if (initScope.indexOf(initToken) >= 0) return;
      /******/
      initScope.push(initToken);
      /******/ // only runs once
      /******/
      if (initPromises[name]) return initPromises[name];
      /******/ // creates a new share scope if needed
      /******/
      if (!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
      /******/ // runs all init snippets from all modules reachable
      /******/
      var scope = __webpack_require__.S[name];
      /******/
      var warn = (msg) => typeof console !== "undefined" && console.warn && console.warn(msg);;
      /******/
      var uniqueName = "empty-project";
      /******/
      var register = (name, version, factory) => {
        /******/
        var versions = scope[name] = scope[name] || {};
        /******/
        var activeVersion = versions[version];
        /******/
        if (!activeVersion || !activeVersion.loaded && uniqueName > activeVersion.from) versions[version] = {
          get: factory,
          from: uniqueName
        };
        /******/
      };
      /******/
      var initExternal = (id) => {
        /******/
        var handleError = (err) => warn("Initialization of sharing external failed: " + err);
        /******/
        try {
          /******/
          var module = __webpack_require__(id);
          /******/
          if (!module) return;
          /******/
          var initFn = (module) => module && module.init && module.init(__webpack_require__.S[name], initScope)
          /******/
          if (module.then) return promises.push(module.then(initFn, handleError));
          /******/
          var initResult = initFn(module);
          /******/
          if (initResult && initResult.then) return promises.push(initResult.catch(handleError));
          /******/
        } catch (err) {
          handleError(err);
        }
        /******/
      }
      /******/
      var promises = [];
      /******/
      switch (name) {
        /******/
        case "default": {
          /******/
          register("react-dom", "17.0.1", () => Promise.all([__webpack_require__.e("vendors"), __webpack_require__.e("webpack_sharing_consume_default_react_react")]).then(() => () => __webpack_require__( /*! ./node_modules/react-dom/index.js */ "./node_modules/react-dom/index.js")));
          /******/
          register("react", "17.0.1", () => __webpack_require__.e("vendors").then(() => () => __webpack_require__( /*! ./node_modules/react/index.js */ "./node_modules/react/index.js")));
          /******/
          initExternal("webpack/container/reference/home");
          /******/
          initExternal("webpack/container/reference/app2");
          /******/
          initExternal("webpack/container/reference/react163");
          /******/
        }
        /******/
        break;
        /******/
      }
      /******/
      if (!promises.length) return initPromises[name] = 1;
      /******/
      return initPromises[name] = Promise.all(promises).then(() => initPromises[name] = 1);
      /******/
    };
    /******/
  })();
  /******/
  /******/
  /* webpack/runtime/publicPath */
  /******/
  (() => {
    /******/
    __webpack_require__.p = "./";
    /******/
  })();
  /******/
  /******/
  /* webpack/runtime/consumes */
  /******/
  (() => {
    /******/
    var parseVersion = (str) => {
      /******/ // see webpack/lib/util/semver.js for original code
      /******/
      var p = p => {
          return p.split(".").map((p => {
            return +p == p ? +p : p
          }))
        },
        n = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),
        r = n[1] ? p(n[1]) : [];
      return n[2] && (r.length++, r.push.apply(r, p(n[2]))), n[3] && (r.push([]), r.push.apply(r, p(n[3]))), r;
      /******/
    }
    /******/
    var versionLt = (a, b) => {
      /******/ // see webpack/lib/util/semver.js for original code
      /******/
      a = parseVersion(a), b = parseVersion(b);
      for (var r = 0;;) {
        if (r >= a.length) return r < b.length && "u" != (typeof b[r])[0];
        var e = a[r],
          n = (typeof e)[0];
        if (r >= b.length) return "u" == n;
        var t = b[r],
          f = (typeof t)[0];
        if (n != f) return "o" == n && "n" == f || ("s" == f || "u" == n);
        if ("o" != n && "u" != n && e != t) return e < t;
        r++
      }
      /******/
    }
    /******/
    var rangeToString = (range) => {
      /******/ // see webpack/lib/util/semver.js for original code
      /******/
      if (1 === range.length) return "*";
      if (0 in range) {
        var r = "",
          n = range[0];
        r += 0 == n ? ">=" : -1 == n ? "<" : 1 == n ? "^" : 2 == n ? "~" : n > 0 ? "=" : "!=";
        for (var e = 1, a = 1; a < range.length; a++) {
          e--, r += "u" == (typeof (t = range[a]))[0] ? "-" : (e > 0 ? "." : "") + (e = 2, t)
        }
        return r
      }
      var g = [];
      for (a = 1; a < range.length; a++) {
        var t = range[a];
        g.push(0 === t ? "not(" + o() + ")" : 1 === t ? "(" + o() + " || " + o() + ")" : 2 === t ? g.pop() + " " + g.pop() : rangeToString(t))
      }
      return o();

      function o() {
        return g.pop().replace(/^\((.+)\)$/, "$1")
      }
      /******/
    }
    /******/
    var satisfy = (range, version) => {
      /******/ // see webpack/lib/util/semver.js for original code
      /******/
      if (0 in range) {
        version = parseVersion(version);
        var e = range[0],
          r = e < 0;
        r && (e = -e - 1);
        for (var n = 0, i = 1, a = !0;; i++, n++) {
          var f, s, g = i < range.length ? (typeof range[i])[0] : "";
          if (n >= version.length || "o" == (s = (typeof (f = version[n]))[0])) return !a || ("u" == g ? i > e && !r : "" == g != r);
          if ("u" == s) {
            if (!a || "u" != g) return !1
          } else if (a)
            if (g == s)
              if (i <= e) {
                if (f != range[i]) return !1
              } else {
                if (r ? f > range[i] : f < range[i]) return !1;
                f != range[i] && (a = !1)
              }
          else if ("s" != g && "n" != g) {
            if (r || i <= e) return !1;
            a = !1, i--
          } else {
            if (i <= e || s < g != r) return !1;
            a = !1
          } else "s" != g && "n" != g && (a = !1, i--)
        }
      }
      var t = [],
        o = t.pop.bind(t);
      for (n = 1; n < range.length; n++) {
        var u = range[n];
        t.push(1 == u ? o() | o() : 2 == u ? o() & o() : u ? satisfy(u, version) : !o())
      }
      return !!o();
      /******/
    }
    /******/
    var ensureExistence = (scopeName, key) => {
      /******/
      var scope = __webpack_require__.S[scopeName];
      /******/
      if (!scope || !__webpack_require__.o(scope, key)) throw new Error("Shared module " + key + " doesn't exist in shared scope " + scopeName);
      /******/
      return scope;
      /******/
    };
    /******/
    var findVersion = (scope, key) => {
      /******/
      var versions = scope[key];
      /******/
      var key = Object.keys(versions).reduce((a, b) => {
        /******/
        return !a || versionLt(a, b) ? b : a;
        /******/
      }, 0);
      /******/
      return key && versions[key]
      /******/
    };
    /******/
    var findSingletonVersionKey = (scope, key) => {
      /******/
      var versions = scope[key];
      /******/
      return Object.keys(versions).reduce((a, b) => {
        /******/
        return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
        /******/
      }, 0);
      /******/
    };
    /******/
    var getInvalidSingletonVersionMessage = (key, version, requiredVersion) => {
      /******/
      return "Unsatisfied version " + version + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"
      /******/
    };
    /******/
    var getSingletonVersion = (scope, scopeName, key, requiredVersion) => {
      /******/
      var version = findSingletonVersionKey(scope, key);
      /******/
      if (!satisfy(requiredVersion, version)) typeof console !== "undefined" && console.warn && console.warn(getInvalidSingletonVersionMessage(key, version, requiredVersion));
      /******/
      return get(scope[key][version]);
      /******/
    };
    /******/
    var getStrictSingletonVersion = (scope, scopeName, key, requiredVersion) => {
      /******/
      var version = findSingletonVersionKey(scope, key);
      /******/
      if (!satisfy(requiredVersion, version)) throw new Error(getInvalidSingletonVersionMessage(key, version, requiredVersion));
      /******/
      return get(scope[key][version]);
      /******/
    };
    /******/
    var findValidVersion = (scope, key, requiredVersion) => {
      /******/
      var versions = scope[key];
      /******/
      var key = Object.keys(versions).reduce((a, b) => {
        /******/
        if (!satisfy(requiredVersion, b)) return a;
        /******/
        return !a || versionLt(a, b) ? b : a;
        /******/
      }, 0);
      /******/
      return key && versions[key]
      /******/
    };
    /******/
    var getInvalidVersionMessage = (scope, scopeName, key, requiredVersion) => {
      /******/
      var versions = scope[key];
      /******/
      return "No satisfying version (" + rangeToString(requiredVersion) + ") of shared module " + key + " found in shared scope " + scopeName + ".\n" +
        /******/
        "Available versions: " + Object.keys(versions).map((key) => {
          /******/
          return key + " from " + versions[key].from;
          /******/
        }).join(", ");
      /******/
    };
    /******/
    var getValidVersion = (scope, scopeName, key, requiredVersion) => {
      /******/
      var entry = findValidVersion(scope, key, requiredVersion);
      /******/
      if (entry) return get(entry);
      /******/
      throw new Error(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
      /******/
    };
    /******/
    var warnInvalidVersion = (scope, scopeName, key, requiredVersion) => {
      /******/
      typeof console !== "undefined" && console.warn && console.warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
      /******/
    };
    /******/
    var get = (entry) => {
      /******/
      entry.loaded = 1;
      /******/
      return entry.get()
      /******/
    };
    /******/
    var init = (fn) => function (scopeName, a, b, c) {
      /******/
      var promise = __webpack_require__.I(scopeName);
      /******/
      if (promise && promise.then) return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], a, b, c));
      /******/
      return fn(scopeName, __webpack_require__.S[scopeName], a, b, c);
      /******/
    };
    /******/
    /******/
    var load = /*#__PURE__*/ init((scopeName, scope, key) => {
      /******/
      ensureExistence(scopeName, key);
      /******/
      return get(findVersion(scope, key));
      /******/
    });
    /******/
    var loadFallback = /*#__PURE__*/ init((scopeName, scope, key, fallback) => {
      /******/
      return scope && __webpack_require__.o(scope, key) ? get(findVersion(scope, key)) : fallback();
      /******/
    });
    /******/
    var loadVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
      /******/
      ensureExistence(scopeName, key);
      /******/
      return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
      /******/
    });
    /******/
    var loadSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
      /******/
      ensureExistence(scopeName, key);
      /******/
      return getSingletonVersion(scope, scopeName, key, version);
      /******/
    });
    /******/
    var loadStrictVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
      /******/
      ensureExistence(scopeName, key);
      /******/
      return getValidVersion(scope, scopeName, key, version);
      /******/
    });
    /******/
    var loadStrictSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
      /******/
      ensureExistence(scopeName, key);
      /******/
      return getStrictSingletonVersion(scope, scopeName, key, version);
      /******/
    });
    /******/
    var loadVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
      /******/
      if (!scope || !__webpack_require__.o(scope, key)) return fallback();
      /******/
      return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
      /******/
    });
    /******/
    var loadSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
      /******/
      if (!scope || !__webpack_require__.o(scope, key)) return fallback();
      /******/
      return getSingletonVersion(scope, scopeName, key, version);
      /******/
    });
    /******/
    var loadStrictVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
      /******/
      var entry = scope && __webpack_require__.o(scope, key) && findValidVersion(scope, key, version);
      /******/
      return entry ? get(entry) : fallback();
      /******/
    });
    /******/
    var loadStrictSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
      /******/
      if (!scope || !__webpack_require__.o(scope, key)) return fallback();
      /******/
      return getStrictSingletonVersion(scope, scopeName, key, version);
      /******/
    });
    /******/
    var installedModules = {};
    /******/
    var moduleToHandlerMapping = {
      /******/
      "webpack/sharing/consume/default/react/react?4cec": () => loadSingletonVersionCheckFallback("default", "react", [1, 17, 0, 1], () => __webpack_require__.e("vendors").then(() => () => __webpack_require__( /*! react */ "./node_modules/react/index.js"))),
      /******/
      "webpack/sharing/consume/default/react-dom/react-dom?df31": () => loadSingletonVersionCheckFallback("default", "react-dom", [1, 17, 0, 1], () => Promise.all([__webpack_require__.e("vendors"), __webpack_require__.e("webpack_sharing_consume_default_react_react")]).then(() => () => __webpack_require__( /*! react-dom */ "./node_modules/react-dom/index.js"))),
      /******/
      "webpack/sharing/consume/default/react/react?147b": () => loadSingletonVersionCheckFallback("default", "react", [0, 16, 9, 0], () => __webpack_require__.e("vendors").then(() => () => __webpack_require__( /*! react */ "./node_modules/react/index.js"))),
      /******/
      "webpack/sharing/consume/default/react-dom/react-dom?2320": () => loadSingletonVersionCheckFallback("default", "react-dom", [0, 16, 9, 0], () => Promise.all([__webpack_require__.e("vendors"), __webpack_require__.e("webpack_sharing_consume_default_react_react")]).then(() => () => __webpack_require__( /*! react-dom */ "./node_modules/react-dom/index.js"))),
      /******/
      "webpack/sharing/consume/default/react/react?bfa1": () => loadSingletonVersionCheckFallback("default", "react", [1, 16, 0, 0], () => __webpack_require__.e("vendors").then(() => () => __webpack_require__( /*! react */ "./node_modules/react/index.js"))),
      /******/
      "webpack/sharing/consume/default/react-dom/react-dom?ff0e": () => loadSingletonVersionCheckFallback("default", "react-dom", [1, 16, 0, 0], () => Promise.all([__webpack_require__.e("vendors"), __webpack_require__.e("webpack_sharing_consume_default_react_react")]).then(() => () => __webpack_require__( /*! react-dom */ "./node_modules/react-dom/index.js"))),
      /******/
      "webpack/sharing/consume/default/react/react?eb70": () => loadSingletonVersionCheckFallback("default", "react", [0, 16, 0, 0], () => __webpack_require__.e("vendors").then(() => () => __webpack_require__( /*! react */ "./node_modules/react/index.js"))),
      /******/
      "webpack/sharing/consume/default/react/react?5977": () => loadSingletonVersionCheckFallback("default", "react", [1, 16, 10, 2], () => __webpack_require__.e("vendors").then(() => () => __webpack_require__( /*! react */ "./node_modules/react/index.js"))),
      /******/
      "webpack/sharing/consume/default/react/react?15a2": () => loadSingletonVersionCheckFallback("default", "react", [0, 15], () => __webpack_require__.e("vendors").then(() => () => __webpack_require__( /*! react */ "./node_modules/react/index.js"))),
      /******/
      "webpack/sharing/consume/default/react/react?aa1c": () => loadSingletonVersionCheckFallback("default", "react", [, [1, 17, 0, 0],
        [1, 16, 0, 0],
        [1, 15, 0, 0],
        [2, 0, 14, 0], 1, 1, 1
      ], () => __webpack_require__.e("vendors").then(() => () => __webpack_require__( /*! react */ "./node_modules/react/index.js"))),
      /******/
      "webpack/sharing/consume/default/react/react?21f3": () => loadSingletonVersionCheckFallback("default", "react", [, [1, 17, 0, 0],
        [1, 16, 0, 0],
        [1, 15, 0, 0], 1, 1
      ], () => __webpack_require__.e("vendors").then(() => () => __webpack_require__( /*! react */ "./node_modules/react/index.js"))),
      /******/
      "webpack/sharing/consume/default/react/react?2997": () => loadSingletonVersionCheckFallback("default", "react", [4, 17, 0, 1], () => __webpack_require__.e("vendors").then(() => () => __webpack_require__( /*! react */ "./node_modules/react/index.js")))
      /******/
    };
    /******/ // no consumes in initial chunks
    /******/
    var chunkMapping = {
      /******/
      "src_bootstrap_js-webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_-d5a5f0": [
        /******/
        "webpack/sharing/consume/default/react/react?4cec",
        /******/
        "webpack/sharing/consume/default/react-dom/react-dom?df31",
        /******/
        "webpack/sharing/consume/default/react/react?147b",
        /******/
        "webpack/sharing/consume/default/react-dom/react-dom?2320",
        /******/
        "webpack/sharing/consume/default/react/react?bfa1",
        /******/
        "webpack/sharing/consume/default/react-dom/react-dom?ff0e",
        /******/
        "webpack/sharing/consume/default/react/react?eb70",
        /******/
        "webpack/sharing/consume/default/react/react?5977",
        /******/
        "webpack/sharing/consume/default/react/react?15a2",
        /******/
        "webpack/sharing/consume/default/react/react?aa1c",
        /******/
        "webpack/sharing/consume/default/react/react?21f3"
        /******/
      ],
      /******/
      "webpack_sharing_consume_default_react_react": [
        /******/
        "webpack/sharing/consume/default/react/react?2997"
        /******/
      ]
      /******/
    };
    /******/
    __webpack_require__.f.consumes = (chunkId, promises) => {
      /******/
      if (__webpack_require__.o(chunkMapping, chunkId)) {
        /******/
        chunkMapping[chunkId].forEach((id) => {
          /******/
          if (__webpack_require__.o(installedModules, id)) return promises.push(installedModules[id]);
          /******/
          var onFactory = (factory) => {
            /******/
            installedModules[id] = 0;
            /******/
            __webpack_modules__[id] = (module) => {
              /******/
              delete __webpack_module_cache__[id];
              /******/
              module.exports = factory();
              /******/
            }
            /******/
          };
          /******/
          var onError = (error) => {
            /******/
            delete installedModules[id];
            /******/
            __webpack_modules__[id] = (module) => {
              /******/
              delete __webpack_module_cache__[id];
              /******/
              throw error;
              /******/
            }
            /******/
          };
          /******/
          try {
            /******/
            var promise = moduleToHandlerMapping[id]();
            /******/
            if (promise.then) {
              /******/
              promises.push(installedModules[id] = promise.then(onFactory).catch(onError));
              /******/
            } else onFactory(promise);
            /******/
          } catch (e) {
            onError(e);
          }
          /******/
        });
        /******/
      }
      /******/
    }
    /******/
  })();
  /******/
  /******/
  /* webpack/runtime/jsonp chunk loading */
  /******/
  (() => {
    /******/ // no baseURI
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // Promise = chunk loading, 0 = chunk loaded
    /******/
    var installedChunks = {
      /******/
      "main": 0
      /******/
    };
    /******/
    /******/
    var deferredModules = [
      /******/
      ["./src/index.js", "vendors"],
      /******/
      ["./node_modules/webpack-dev-server/client/index.js?http://localhost:8000", "vendors"]
      /******/
    ];
    /******/
    __webpack_require__.f.j = (chunkId, promises) => {
      /******/ // JSONP chunk loading for javascript
      /******/
      var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
      /******/
      if (installedChunkData !== 0) { // 0 means "already installed".
        /******/
        /******/ // a Promise means "currently loading".
        /******/
        if (installedChunkData) {
          /******/
          promises.push(installedChunkData[2]);
          /******/
        } else {
          /******/
          if (!/^webpack_(container_remote_(react163_(newReact(|DOM)|Content)|app2_Button)|sharing_consume_default_react_react)$/.test(chunkId)) {
            /******/ // setup Promise in chunk cache
            /******/
            var promise = new Promise((resolve, reject) => {
              /******/
              installedChunkData = installedChunks[chunkId] = [resolve, reject];
              /******/
            });
            /******/
            promises.push(installedChunkData[2] = promise);
            /******/
            /******/ // start chunk loading
            /******/
            var url = __webpack_require__.p + __webpack_require__.u(chunkId);
            /******/ // create error before stack unwound to get useful stacktrace later
            /******/
            var error = new Error();
            /******/
            var loadingEnded = (event) => {
              /******/
              if (__webpack_require__.o(installedChunks, chunkId)) {
                /******/
                installedChunkData = installedChunks[chunkId];
                /******/
                if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
                /******/
                if (installedChunkData) {
                  /******/
                  var errorType = event && (event.type === 'load' ? 'missing' : event.type);
                  /******/
                  var realSrc = event && event.target && event.target.src;
                  /******/
                  error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
                  /******/
                  error.name = 'ChunkLoadError';
                  /******/
                  error.type = errorType;
                  /******/
                  error.request = realSrc;
                  /******/
                  installedChunkData[1](error);
                  /******/
                }
                /******/
              }
              /******/
            };
            /******/
            __webpack_require__.l(url, loadingEnded, "chunk-" + chunkId);
            /******/
          } else installedChunks[chunkId] = 0;
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/
    var checkDeferredModules = () => {
      /******/
      /******/
    };
    /******/
    function checkDeferredModulesImpl() {
      /******/
      var result;
      /******/
      for (var i = 0; i < deferredModules.length; i++) {
        /******/
        var deferredModule = deferredModules[i];
        /******/
        var fulfilled = true;
        /******/
        for (var j = 1; j < deferredModule.length; j++) {
          /******/
          var depId = deferredModule[j];
          /******/
          if (installedChunks[depId] !== 0) fulfilled = false;
          /******/
        }
        /******/
        if (fulfilled) {
          /******/
          deferredModules.splice(i--, 1);
          /******/
          result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
          /******/
        }
        /******/
      }
      /******/
      if (deferredModules.length === 0) {
        /******/
        __webpack_require__.x();
        /******/
        __webpack_require__.x = () => {
          /******/
          /******/
        }
        /******/
      }
      /******/
      return result;
      /******/
    }
    /******/
    __webpack_require__.x = () => {
      /******/ // reset startup function so it can be called again when more startup code is added
      /******/
      __webpack_require__.x = () => {
        /******/
        /******/
      }
      /******/
      chunkLoadingGlobal = chunkLoadingGlobal.slice();
      /******/
      for (var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
      /******/
      return (checkDeferredModules = checkDeferredModulesImpl)();
      /******/
    };
    /******/
    /******/ // install a JSONP callback for chunk loading
    /******/
    var webpackJsonpCallback = (data) => {
      /******/
      var [chunkIds, moreModules, runtime, executeModules] = data;
      /******/ // add "moreModules" to the modules object,
      /******/ // then flag all "chunkIds" as loaded and fire callback
      /******/
      var moduleId, chunkId, i = 0,
        resolves = [];
      /******/
      for (; i < chunkIds.length; i++) {
        /******/
        chunkId = chunkIds[i];
        /******/
        if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
          /******/
          resolves.push(installedChunks[chunkId][0]);
          /******/
        }
        /******/
        installedChunks[chunkId] = 0;
        /******/
      }
      /******/
      for (moduleId in moreModules) {
        /******/
        if (__webpack_require__.o(moreModules, moduleId)) {
          /******/
          __webpack_require__.m[moduleId] = moreModules[moduleId];
          /******/
        }
        /******/
      }
      /******/
      if (runtime) runtime(__webpack_require__);
      /******/
      parentChunkLoadingFunction(data);
      /******/
      while (resolves.length) {
        /******/
        resolves.shift()();
        /******/
      }
      /******/
      /******/ // add entry modules from loaded chunk to deferred list
      /******/
      if (executeModules) deferredModules.push.apply(deferredModules, executeModules);
      /******/
      /******/ // run deferred modules when all chunks ready
      /******/
      return checkDeferredModules();
      /******/
    }
    /******/
    /******/
    var chunkLoadingGlobal = self["webpackChunkempty_project"] = self["webpackChunkempty_project"] || [];
    /******/
    var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
    /******/
    chunkLoadingGlobal.push = webpackJsonpCallback;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/ // run startup
  /******/
  return __webpack_require__.x();
  /******/
})();