const styles = {
headerStyle: {
  backgroundColor: '#e3e2e2',
  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  paddingTop: 15,
  shadowColor: '#f1f2f3',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  },
albumStyle: {
  backgroundColor: '#f3f6f9',
  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  paddingTop: 15,
  shadowColor: '#a3b4a9',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  },
containerStyle: {
  borderBottomWidth: 1,
  padding: 5,
  backgroundColor: '#fff',
  // justifyContent: 'center',
  flexDirection: 'row',
  borderColor: '#ddd',
  position: 'relative',
  },
containerStyles: {
  borderWidth: 1,
  borderRadius: 2,
  borderColor: '#ddd',
  borderBottomWidth: 0,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 1,
  marginLeft: 5,
  marginRight: 5,
  marginTop: 10,
  },
textStyle: {
  fontSize: 20
  },
headerTextStyle: {
  flexDirection: 'column',
  justifyContent: 'space-around',
  fontSize: 20
  },
thumbnailContainerStyle: {
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 10,
  marginRight: 10
},
thumbnailStyle: {
  width: 50, height: 50 
},
imageStyle: {
  height: 400,
  flex: 1,
  width: null
},
buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
},
buttonTextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
},
inputStyle: {
  color: '#000',
  paddingRight: 5,
  paddingLeft: 5,
  fontSize: 18,
  lineHeight: 23,
  flex: 2,

},
labelStyle: {
  fontSize: 18,
  paddingLeft: 20,
  flex: 1 
},
inputContainerStyle: {
  height: 40,
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center'
},
errorTextStyle: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'center'
},
spinnerStyle: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}
};

export { styles };
