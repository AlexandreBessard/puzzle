import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.compenent';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';


function App() {
  return (
    <div>
      <Header />
      {/* Switch will not render /puzzle1 even it is a match but without the 'exact'  */}
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/puzzle/' component={HomePage} />
      <Route exact path='/puzzle/shop/' component={ShopPage} />
      <Route exact path='/puzzle/signIn/' component={SignInAndSignOutPage} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  //action object passed to every reducer
  //Dispatch the object, user is into currentUser from redux
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

//Secodn argument Dispatch the props
export default connect(null, mapDispatchToProps)(App);
