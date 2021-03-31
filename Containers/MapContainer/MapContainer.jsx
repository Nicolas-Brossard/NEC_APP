import React from 'react';
import { View, StyleSheet } from 'react-native';
import Label from '../../Components/LabelComponent';
import { WAREHOUSE_COORDS, MARKERS } from "../../assets/data/markers";

const getInputValue = (name, value) => {
  console.log(name, value);
};

const customLabelStyle = {
  'textAlign': 'center',
}

const MapContainer = () => {
  return (
    <View style={styles.container}>
      <Label customStyle={customLabelStyle} title="title"></Label>
      <View>
        <Map navigation={props.navigation} regionCoords={WAREHOUSE_COORDS} markers={MARKERS} />
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

export default MapContainer;
