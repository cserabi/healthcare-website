import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ContactUs from './Component/ContactUs/ContactUs';
import AuthProvider from './Component/Context/AuthProvider';
import FAQ from './Component/FAQ/FAQ';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';

import NotFound from './Component/NOTFOUND/NotFound';
import OrderReview from './Component/OrderReview/OrderReview';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Service from './Component/Service/Service';
import Signup from './Component/Signup/Signup';
import Testomonial from './Component/Testomonial/Testomonial';


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

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute exact path="/orderreview/:key">
              <OrderReview></OrderReview>
            </PrivateRoute>



            <Route path="/service">
              <Service></Service>

            </Route>
            <Route path="/faq">
              <FAQ></FAQ>
            </Route>

            <Route path="/testomonial">
              <Testomonial></Testomonial>
            </Route>
            <Route path="/contactus">
              <ContactUs></ContactUs>
            </Route>

            <Route path="/login" >
              <Login></Login>
            </Route>

            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>

        </Router>

      </AuthProvider>


    </div >
  );
}

export default App;
