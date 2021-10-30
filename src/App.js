import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Booking from "./components/Booking/Booking";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home ">
              <Home></Home>
            </Route>

            <Route exact path="/travel-packages/:id">
              <Booking></Booking>
            </Route>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
