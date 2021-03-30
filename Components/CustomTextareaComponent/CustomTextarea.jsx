import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const CustomTextarea = ({
  name,
}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.textInput}
      multiline={true}
      numberOfLines={4}
      onChangeText={(value) => getTextareaValue(name, value)}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 20,
    width: 'auto',
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  textInput: {
    width: '80%',
    padding: 12,
    fontSize: 18,
  },
});
export default CustomTextarea;
