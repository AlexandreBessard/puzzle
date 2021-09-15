import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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

  //This method is called after the component is rendered.
  //This is where you run statements that requires that the component is already placed in the DOM.
  componentDidMount() {
    //Subscriber, check if new user is connected
    //any Changes related to this app, firebase send a message if states have changed
    //Does not manually fetch the state of connection
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header  currentUser={this.state.currentUser}/>
        {/* Switch will not render /puzzle1 even it is a match but without the 'exact'  */}
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/puzzle/' component={HomePage} />
        <Route exact path='/puzzle/shop/' component={ShopPage} />
        <Route exact path='/puzzle/signIn/' component={SignInAndSignUpPage} />
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
