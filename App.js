// import react et elements REACT native surtout StyleSheet
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
//composants en dessous
import Introduction from './component/Introduction';
import Statusbar from './component/Statusbar';
import Scrooler from './component/Scrooler';
import FlatNest from './component/FlatNest';
import FlexBox from './component/FlexBox';
import NavBar from './component/NavBar';
// import Exo from './component/Exo';
import TouchPress from './component/TouchPress';
import GestionInput from './component/GestionInput';
import Alerte from './component/Alerte';
import Calculette from './component/Calculette';

// rnfe
// appeler les composants
export const App = () => {
  return (
    <View style={styles.body}>
      <Text> Bienvenue composant App ici </Text>
  {/* <Introduction/>
  <Statusbar/>
      <Scrooler/>
      <FlatNest/> */}
      {/* <FlexBox/> */}
      {/* <NavBar/> */}
      {/* <Exo/> */}
      {/* <TouchPress/> */}
      {/* <GestionInput/> */}
      {/* <Alerte/> */}
      <Calculette />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default App;
