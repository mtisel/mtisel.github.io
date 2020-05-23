import React, { Component } from "react";
import "./App.css";
import Info from "./Info.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  //render starts here -----------------------
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Maja Tisel Web Showcase</title>
          <meta name="description" content="Maja Tisel Web Showcase" />
          <meta name="theme-color" content="#000000" />
          <meta property="og:title" content="Maja Tisel Web Showcase" />
          <meta
            property="og:description"
            content="Hi - I'm Maja, a designer currently living and working in Berlin. 
    Regardless the medium I establish daring concepts, 
    bold visual appeal and concrete usability across 
    various platforms. I approach projects holistically as I am zooming-out 
    to understand overarching purpose of the project and zooming-in to ensure 
    meticulous design."
          />
          <meta property="og:image" content="Maja Tisel Web Showcase" />
          <meta property="og:url" content="majatisel.com" />
          <link rel="image_src" href="src/images/Favicon.png" />
        </Helmet>
        <Router>
          <div>
            <ul className="App-header">
              <Link
                className="navLink"
                style={{ float: "left", marginLeft: "5%" }}
                to="/"
              >
                {" "}
                Maja Tisel{" "}
              </Link>
              <Link
                className="navLink"
                style={{ float: "right", marginRight: "5%" }}
                to="/info"
              >
                Info
              </Link>{" "}
            </ul>
          </div>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/info" component={Info}></Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
