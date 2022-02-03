import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.red}>
        <Text> hhh </Text>
      </View>

      <View style={styles.yellow}>
        <Text> hhh </Text>
      </View>

      <View style={styles.green}>
        <Text> hhh </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex:1,
      // column-reverse inverse ordre affichage  
      flexDirection:"column",
      justifyContent:"center",
    //   alignItems:""
  },
  red: {
    //   flex:1,
    height:50,
    width:50,
    backgroundColor: 'red',
  },
  yellow: {
        height:50,
    width:50,
    //   flex:2,
    backgroundColor: 'yellow',
  },
  green: {
    //   flex:3,
      height:50,
    width:50,
    backgroundColor: 'green',
  },
});

export default FlexBox;
