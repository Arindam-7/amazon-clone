import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe('pk_test_51HSIx3HcXwf6dTfD7ENTIedcZn59JgIaRrur9P8Urq8Br0KERu2ZnDMj16f2IB63l5m0DivBZZNjIBXXT0UmNp6I00JX0Xexry');


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('The User is - ', authUser);

    if (authUser) {
      // logged in

      dispatch({
        type: 'SET_USER',
        user: authUser,
      });
    } else {
      // logged out

      dispatch({
        type: 'SET_USER',
        user: null,
      });
    }
  });
  }, []);


  return (
    <Router>
      <div className="app">

        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
