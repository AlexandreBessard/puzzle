import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/puzzle'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/puzzle/shop/'>
        SHOP
      </Link>
      <Link className='option' to='/puzzle/shop/'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/puzzle/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  currenUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);