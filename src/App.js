import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
// import AlbumList from './src/components/AlbumList';
import LoginForm from './components/LoginForm';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    };
  }
	componentWillMount() {
		firebase.initializeApp({
    apiKey: 'AIzaSyDzoaIiy32XpocgST5hMZx7DdLO4o-3ufI',
    authDomain: 'rn-auth-bc361.firebaseapp.com',
    databaseURL: 'https://rn-auth-bc361.firebaseio.com',
    projectId: 'rn-auth-bc361',
    storageBucket: 'rn-auth-bc361.appspot.com',
    messagingSenderId: '747193870355'
  });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
	}
renderContent() {
  switch (this.state.loggedIn) {
    case true: 
    return (<CardSection>
              <Button onPress={() => firebase.auth().signOut()}> Log Out </Button>
            </CardSection>);
    case false:
    return <LoginForm />;
    default: return <Spinner size='large' />;
  }
}
  render() {
    return (
     <View style={{ flex: 1 }}>
		<Header text='Authentication' />
		{this.renderContent()}
     </View>
     );
      }
     }

