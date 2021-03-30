import React from 'react';
import { View, StyleSheet } from 'react-native';
import Label from '../../Components/LabelComponent';
import { QUESTION_TITLE } from './messages';
import CustomTextarea from '../../Components/CustomTextareaComponent';
import CustomTextInput from '../../Components/CustomTextInputComponent';

const getInputValue = (name, value) => {
  console.log(name, value);
};

const getTextareaValue = (name, value) => {
  console.log(name, value);
};

const input = { name: 'answer', placeholder: 'Objet de la demande' };
const icon = { name: 'sc-telegram', type: 'evilicon', color: '#000' };

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
          name={input.name}
          placeholder={input.placeholder}
          iconName={icon.name}
          iconType={icon.type}
          iconColor={icon.color}
        />
        <CustomTextarea
          getInputValue={getTextareaValue}
        />
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
