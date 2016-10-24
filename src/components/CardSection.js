import React from 'react';
import { Text, View } from 'react-native';

const style = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

const CardSection = ({ children }) => {
  return (
    <View style={style.containerStyle}>
      {children}
    </View>
  );
};

export default CardSection;
