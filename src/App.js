import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddService from "./components/AddService/AddService";
import AllBookings from "./components/AllBookings/AllBookings";
import UpdateUser from "./components/AllBookings/UpdateUser";
import Booking from "./components/Booking/Booking";
import MyBookings from "./components/MyBookings/MyBookings";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import PrivateRoute from "./components/pages/Login/PrivateRoute";
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

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/about">
              <About></About>
            </Route>

            <Route exact path="/contact">
              <Contact></Contact>
            </Route>

            <PrivateRoute exact path="/travel-packages/:id">
              <Booking></Booking>
            </PrivateRoute>

            <PrivateRoute exact path="/my-bookings">
              <MyBookings></MyBookings>
            </PrivateRoute>

            <PrivateRoute exact path="/all-bookings">
              <AllBookings></AllBookings>
            </PrivateRoute>

            <PrivateRoute exact path="/add-service">
              <AddService></AddService>
            </PrivateRoute>

            <PrivateRoute exact path="/update">
              <UpdateUser></UpdateUser>
            </PrivateRoute>

            <Route exact path="/login">
              <Login></Login>
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
