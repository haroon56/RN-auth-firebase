import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

const { containerStyle } = styles;

const CardSection = (props) => {
	return (
		<View style={containerStyle}>
			{props.children}
		</View>
		);
};

export { CardSection };
