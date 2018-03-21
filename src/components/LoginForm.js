import firebase from 'firebase';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, Input, CardSection, Button, styles, Spinner } from './common';

const { errorTextStyle } = styles;

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: '',
			loading: false
		};
	}
onButtonPress() {
const { email, password } = this.state; 

	this.setState({ error: '', loading: true });
	firebase.auth().signInWithEmailAndPassword(email, password)
		.then(this.onLoginSuccess.bind(this))
		.catch(() => { 
	firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(this.onLoginSuccess.bind(this))
		.catch(this.onLoginFail.bind(this));
	});
}

onLoginFail() {
this.setState({
	error: 'Authentication Fail',
	loading: false
});
}
onLoginSuccess() {
	this.setState({
		email: '',
		password: '',
		loading: false,
		error: ''
	});
}
renderButton() {
	if (this.state.loading) {
		return <Spinner size='small' />;
	}

	return (
		<Button onPress={this.onButtonPress.bind(this)}>
					Log In
		</Button>
	);
}
render() {
	return (
		<Card>
			<CardSection>
			<Input
				placeholder='user@gmail.com'
				label='Email'
				value={this.state.email}
				onChangeText={email => this.setState({ email })} 
				/>
			</CardSection>

			<CardSection>
				<Input
					secureTextEntry
					placeholder='Password'
					label='Password'
					value={this.state.password}
					onChangeText={password => this.setState({ password })} 
				/>
			</CardSection>
			<Text style={errorTextStyle}>
				{this.state.error}
			</Text>

			<CardSection>
				{this.renderButton()}
			</CardSection>
		</Card>
		);
}
}
export default LoginForm;
