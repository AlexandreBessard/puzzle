import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.compenent';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { auth } from './firebase/firebase.utils';

import './App.css';
import React from 'react';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    //Subscriber, check if new user is connected
    //any Changes related to this app, firebase send a message if states have changed
    //Does not manually fetch the state of connection
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

const mapDispatchToProps = dispatch => ({
  //action object passed to every reducer
  //Dispatch the object, user is into currentUser from redux
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

//Second argument Dispatch the props
export default connect(null, mapDispatchToProps)(App);
