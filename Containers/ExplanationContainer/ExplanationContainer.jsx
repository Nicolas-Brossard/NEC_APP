import React from 'react';
import Label from "../../Components/LabelComponent";
import {StyleSheet, View} from "react-native";
import { TEXT } from './messages';
import CustomImage from "../../Components/CustomImageComponent";
import CustomText from "../../Components/CustomTextComponent";

const ExplanationContainer = () => {

  const inputs = [
    { name: 'mail', placeholder: 'Votre adresse mail' },
    { name: 'password', placeholder: 'Votre mot de passe' },
  ]

  return(
    <View style={styles.container}>
      <Label title="Description bien n°X" />

      <View style={styles.image}>
      <CustomImage
      urlimage={require('../../assets/images/wolf.jpg')}/>
      </View>

      <CustomText message={TEXT} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height : '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    display: 'flex',
    flex : 1,
  },
  margin: {
    marginVertical: 100,
  },
  image: {
    width: '90%',
    height : '60%',
  }
});


export default ExplanationContainer;
