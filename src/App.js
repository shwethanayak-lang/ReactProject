import React from "react";
import "./App.css";
import { NavbarContainer, AppFooter } from "./Components/Navbar/Navbar.style";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Products from "./Components/Products/Products";
import Nav from "./Components/Navbar/Nav";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div>
            <NavbarContainer>
              <Nav />
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/products" component={Products} />
              </Switch>
            </NavbarContainer>
          </div>
        </Router>
        <AppFooter>
          <h3 className="navbrand">
            <span className="navbrand__footer">HelloShops ☘</span>
          </h3>
          <ul className="footer__branches">
            <li>Gujarath</li>
            <li>Kerala</li>
            <li>Madya Pradesh</li>
            <li>Delhi</li>
            <li>Karnataka</li>
            <li>Rajasthan</li>
          </ul>
        </AppFooter>
      </div>
    </>
  );
}

export default App;
