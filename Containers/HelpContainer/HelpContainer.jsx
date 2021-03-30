import React from 'react';
import { View, StyleSheet } from 'react-native';
import Label from '../../Components/LabelComponent';
import { QUESTION_TITLE } from './messages';
import CustomButton from '../../Components/CustomButtonComponent';
import CustomTextInput from '../../Components/CustomTextInputComponent';

const getInputValue = (name, value) => {
  console.log(name, value);
};

const textInput = { name: 'question', placeholder: 'Objet' };
const textArea = { name: 'answer', placeholder: 'Description' };

const customLabelStyle = {
  'textAlign': 'center',
}

const HelpContainer = () => {
  return (
    <View style={styles.container}>
      <Label customStyle={customLabelStyle} title={QUESTION_TITLE}></Label>
      <View>
        <CustomTextInput
          getInputValue={getInputValue}
          name={textInput.name}
          placeholder={textInput.placeholder}
        />
        <CustomTextInput
          getInputValue={getInputValue}
          name={textArea.name}
          placeholder={textArea.placeholder}
          textarea={true}
          lines={10}
        />
        <CustomButton title="Envoyer" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
});

export default HelpContainer;
