import React from 'react';
import {View, Text} from 'react-native';
import {LoginButton} from 'react-native-fbsdk';

const App = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <LoginButton />
    </View>
  );
};

export default App;
