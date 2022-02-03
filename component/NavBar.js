import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
export const NavBar = (props) => {
//   const icon1 = <Image('photo.png');
//   const icon2 = require('photo.png');
  return (
    <View style={styles.container}>
      <Text>navbar</Text>
      <View style={styles.container}>
        <View style={styles.navbar}>
          {/* <Image source={icon2} style={styles.icons} />
          <Image source={icon2} style={styles.icons} />
          <Image source={icon2} style={styles.icons} />
          <Image source={icon2} style={styles.icons} /> */}
        </View>
        <View style={styles.body}>
          <View style={styles.sections}>
            <View style={styles.article}>
              <Text>texte</Text>
              <Image
                source={{
                  uri: 'https://images.bfmtv.com/IBDbn2FIR0_aPo_MFXnocaC9DRY=/56x1:1384x748/1328x0/images/Harry-Potter-et-les-reliques-de-la-mort-488636.jpg',
                }}
                style={styles.images}
              />
            </View>
          </View>
          <View style={styles.aside}>
            {/* <Image source={icon1} style={styles.icons} />
            <Image source={icon1} style={styles.icons} />
            <Image source={icon1} style={styles.icons} />
            <Image source={icon1} style={styles.icons} /> */}
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    backgroundColor: '#1936f7',
  },
  body: {
    flex: 10,
    flexDirection: 'row-reverse',
    backgroundColor: '#ffffff',
  },
  sections: {
    flex: 1,
  },
  article: {
    flex: 1,
    background: '#8f9eff',
    alignItems: 'center',
  },
  aside: {
    width: 50,
    backgroundColor: '#1936f7',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  icons: {
    width: 50,
    height: 50,
  },
  images: {
    width: 400,
    height: 400,
  },
});

export default NavBar;
