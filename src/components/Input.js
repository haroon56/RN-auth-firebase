import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { styles } from './common';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
const { inputStyle, labelStyle, inputContainerStyle } = styles;
	return (
		<View style={inputContainerStyle}>
			<Text style={labelStyle}>
				{label}
			</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autocorrect={false}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
				/>
		</View>
		);
};
export { Input };
