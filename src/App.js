import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';
import Orders from './components/Orders';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './apis/firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CONST from './constants/constants';

const promise = loadStripe(
  'pk_test_51K3V74DF4iW6Xo356YRgxOc0f9x1bZ61HdaZCuAIez5m2n78eyb3HTLkBwtYkdYOiU3aWR5ET9HXUgW0cBbKcQlt00qxh9XuRE'
);

function App() {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch({
          type: CONST.action.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: CONST.action.SET_USER,
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            path='/orders'
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route
            path='/checkout'
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path='/payment'
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path='/'
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
