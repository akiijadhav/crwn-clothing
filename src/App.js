import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {
  unsubscribeFomAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFomAuth = auth.onAuthStateChanged(async userAuth => {
      //if user signs In
      if (userAuth) {
        //we will get that userRef i.e. the document if it's there
        const userRef = await createUserProfileDocument(userAuth);

        //subscribe for change in data, also get back first state of data
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      //if the userAuth object comes null i.e when user signsOut

        //userAuth here will be null
      setCurrentUser(userAuth);
      
    });
  }

  //unmount to prevent memory leaks
  componentWillUnmount() {
    this.unsubscribeFomAuth();
  }

  render() {
    return (
      <div className="App">
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
