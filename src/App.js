import React, { useEffect } from "react";
//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Footer from "./Footer";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //login
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //logout
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //cleanup process is down here
      unsubscribe();
    };
  }, []);

  console.log("USER >>>", user);

  return (
    <Router>
      <div className="App">
        {/* <h1>Hey Dharmesh Here let's build Amazon Clone</h1> */}
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
            {/* <h1>Checkout Page</h1> */}
          </Route>
          <Route path="/login">
            {/* <h1>Login Page</h1> */}
            <Login />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
