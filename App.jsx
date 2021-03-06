import React from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from './Components/LogoComponent';
import LoginLayout from './Layouts/LoginLayout';
import HelpLayout from './Layouts/HelpLayout';
import NewAccountLayout from './Layouts/NewAccountLayout';
import ExplanationLayout from './Layouts/ExplanationLayout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <>
      <Logo />
      <View style={styles.container}>
        {/* <LoginLayout /> */}
        {/* <NewAccountLayout /> */}
        {/* <ExplanationLayout /> */}
        <HelpLayout />
      </View>
    </>
  );
}
