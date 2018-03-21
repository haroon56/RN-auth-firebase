import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

const { containerStyles } = styles;

const Card = (props) => {
	return (
		<View style={containerStyles}>{props.children}</View>
		);
};

export { Card };
