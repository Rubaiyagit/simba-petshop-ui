
import SignIn from '../src/components/pages/signin/SignIn';
import SignUp from '../src/components/pages/signup/SignUp';
import { BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';
import HomePage from './components/pages/homepage/Home'
import NavBar from './components/pages/homepage/NavBar'
import Banner from './components/pages/homepage/Banner'
import { brown } from '@material-ui/core/colors';
import About from './components/pages/homepage/About'
import Footer from './components/pages/homepage/footer'
import CheckOut from './components/pages/checkout/Checkout'
import AddressForm from './components/pages/checkout/AddressForm'
import PaymentForm from './components/pages/checkout/PaymentForm'
import Review from './components/pages/checkout/Review'
import Cart from './components/pages/Cart/Cart'
function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path = "/" component={HomePage} exact/>
        <Route path = "/signin" component={SignIn} exact/>
        <Route path = "/signup" component={SignUp} exact />
        <Route path = "/checkout" component={CheckOut} exact />
        <Route path = "/checkout/address" component={AddressForm} exact />
        <Route path = "/checkout/payment" component={PaymentForm} exact />
        <Route path = "/checkout/review" component={Review} exact />
        <Route path = "/cart" component={Cart} exact />

        
      </Switch>
    
      <About/>
      <Footer/>
      
    </div>
    </Router>
  );
}

export default App;
