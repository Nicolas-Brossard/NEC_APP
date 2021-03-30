import React from 'react';
import {Text, StyleSheet, View} from "react-native";

const Label = ({title, customStyle}) =>
  <View style={customStyle}>
    <Text style={styles.text}> {title} </Text>
  </View>
;

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    fontWeight: '700',
  }
});

export default Label;
