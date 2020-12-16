import LocalButton from "./Button";
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
// const RemoteButton = React.lazy(() => import("app1/Button"));
import Home from './Home'
import About from './About'
import Users from './Users'

const App = () => (
  <div>
    <h1>Bi-Directional</h1>
    <h2>App 2</h2>的地方
    <LocalButton />
    <BrowserRouter >
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    {/* <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense> */}
  </div>
);

export default App;
